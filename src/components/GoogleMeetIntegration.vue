<template>
    <div>
        <h1>Google Meet Integration</h1>
        <button v-if="!isAuthenticated" @click="handleAuthClick">
            Authorize
        </button>
        <button v-if="isAuthenticated" @click="createEvent">
            Create Meeting
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuthenticated: false,
        };
    },
    methods: {
        // Initialize the Google API client library
        initClient() {
            gapi.load("client:auth2", () => {
                gapi.client
                    .init({
                        apiKey: "YOUR_API_KEY",
                        clientId: "YOUR_CLIENT_ID.apps.googleusercontent.com",
                        discoveryDocs: [
                            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
                        ],
                        scope: "https://www.googleapis.com/auth/calendar.events",
                    })
                    .then(() => {
                        gapi.auth2
                            .getAuthInstance()
                            .isSignedIn.listen(this.updateSigninStatus);
                        this.updateSigninStatus(
                            gapi.auth2.getAuthInstance().isSignedIn.get(),
                        );
                    });
            });
        },
        updateSigninStatus(isSignedIn) {
            this.isAuthenticated = isSignedIn;
        },
        handleAuthClick() {
            gapi.auth2.getAuthInstance().signIn();
        },
        createEvent() {
            const event = {
                summary: "Google Meet Meeting",
                description: "A meeting created from Vue app",
                start: {
                    dateTime: "2024-01-01T09:00:00-07:00",
                    timeZone: "America/Los_Angeles",
                },
                end: {
                    dateTime: "2024-01-01T10:00:00-07:00",
                    timeZone: "America/Los_Angeles",
                },
                conferenceData: {
                    createRequest: {
                        requestId: "sample123",
                        conferenceSolutionKey: { type: "hangoutsMeet" },
                    },
                },
                attendees: [
                    { email: "lpage@example.com" },
                    { email: "sbrin@example.com" },
                ],
            };

            const request = gapi.client.calendar.events.insert({
                calendarId: "primary",
                resource: event,
                conferenceDataVersion: 1,
            });

            request.execute((event) => {
                console.log("Event created: ", event.htmlLink);
            });
        },
    },
    created() {
        this.initClient();
    },
};
</script>
