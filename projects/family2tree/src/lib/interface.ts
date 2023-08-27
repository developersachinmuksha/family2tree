export interface FamilyMembers {
    family_relation_id: string;
    father_id: any;
    mother_id: any;
    family_id: string;
    user_id: string;
    order: number;
    user_detail: UserDetail;
    spouses: Spouse[];
}

export interface UserDetail {
    user_id: string;
    first_name: string;
    last_name: string;
    gender: number;
    unique_code: any;
    profile_pic: any;
    friendRequest: any;
}

export interface Spouse {
    id: string;
    spouse_id: string;
    user_id: string;
    family_id: string;
    spouse_detail: UserDetail;
    childrens?: childrens[]; // Not used this Array
    children?: FamilyMembers[];
}

export interface childrens {
    id: string;
    child_id: string;
    user_id: string;
    family_id: string;
    child_detail: UserDetail;
}