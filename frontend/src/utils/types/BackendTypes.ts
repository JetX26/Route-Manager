export type organization = {
    id: string;
    name: string;
    orgType: string;
    members: string[];
    admins: string[];
    owner: string;
    memberId: string;
}

export type member = {
    id: string;
    firstName: string;
    lastName: string;
    clerkId: string;
    organizations: string[];
    routeBookId: string;
    routeId: string;
}

export type orgAxios = {
    success: boolean,
    data: organization,
    error: string;
}

export type memberAxios = {
    success: boolean;
    data: member;
    error: string;
}