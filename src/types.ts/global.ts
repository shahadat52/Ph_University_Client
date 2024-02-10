/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
    data: {
        err: any
        errorSources: any
        message: string;
        stack: any
        success: boolean
    };
    status: number
}

export type TResponse = {
    error?: TError;
    data?: {
        success:boolean
        message:string;
        data:any;
    }
}