export const API_ROUTES = {
    auth: {
        signin: "/v1/auth/sign-in",
        signup: "/v1/auth/sign-up",
        signout: "/v1/auth/sign-out",
    },
    broker: {
        list: "/v1/brokers",
    },
    currency: {
        list: "/v1/currencies",
    },
    dashboard: {
        get: "/v1/dashboard",
    },
    position: {
        create: "/v1/positions",
        get: (id: string) => `/v1/positions/${id}`,
        update: (id: string) => `/v1/positions/${id}`,
        deletePosition: (id: string) => `/v1/positions/${id}`,
        compute: "/v1/positions/compute",
        import: "/v1/positions/import",
        search: "/v1/positions/search",
    },
    symbol: {
        search: "/v1/symbols/search",
    },
    user: {
        me: "/v1/users/me",
    },
    userBrokerAccount: {
        list: "/v1/user-broker-accounts",
        create: "/v1/user-broker-accounts",
        update: (id: string) => `/v1/user-broker-accounts/${id}`,
        delete: (id: string) => `/v1/user-broker-accounts/${id}`,
        connect: (id: string) => `/v1/user-broker-accounts/${id}/connect`,
        disconnect: (id: string) => `/v1/user-broker-accounts/${id}/disconnect`,
        sync: (id: string) => `/v1/user-broker-accounts/${id}/sync`,
    },
};
