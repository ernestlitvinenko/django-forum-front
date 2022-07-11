export enum API_URLS {
    BASE_URL = "http://localhost:8000/api",
}

export enum AvailableMethods {
    GetTopicList = "topics/get-topics-list",
    GetThread = "topics/get-topic",
    Login = 'users/token',
    UserData = 'users/me',
    Register = 'users/register',
    VerifyToken = 'users/token/verify',
    RefreshToken = 'users/refresh',
    CreateTopic = 'topics/create-topic',
    CreateMessage = 'topics/create-message'
}

export enum FetchMethods {
    GET = 'GET',
    POST = 'POST'
}