export interface IChannel {
    id: number
    name: string
    owner:  IOwnerInfo
    thumbnailSrc:   string
    LiveSrc:    string
    
}

export interface IOwnerInfo {
    name?: string
    adress?:  string
    mail?: string
    phoneNumber?: string
    intracomNumber?: string
}