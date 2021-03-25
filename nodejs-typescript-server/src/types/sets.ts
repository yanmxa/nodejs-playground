export interface SetResponse {
    errno: number,
    errmsg?: string,
    data?: any,
}

export interface Sets {
    setid: number,
    setname: string,
    typecode: string,
    creator: string
    ifrun: number,
    createtime: string
}