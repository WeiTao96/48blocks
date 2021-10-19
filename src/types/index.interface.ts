export interface IBlock {
    name: string,
    type: number,
    id: number,
    remarkid?: number,
}

export interface IRemark {
    remark: string,
    id: number
}

export interface IDate {
    name:string,
    blocks: Array<IBlock>,
    remarks: Array<IRemark>
}