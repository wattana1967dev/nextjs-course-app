export interface Course {
    id: number;
    title: string;
    default: string;
    date: string;
    view: number;
    picture: string;
}

export interface CourseResponse {
    data: Course();
    meta: {
        status: string;
        status_code: number;
    }
}