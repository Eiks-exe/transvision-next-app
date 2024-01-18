import { IChannel } from "@/interfaces/channel";

export const channelsMock: IChannel[] = [
    {
        id: 1,
        name: "boissard",
        owner: {
            name: "Owner Name 1",
            adress: "Owner Address 1",
            mail: "owner1@example.com",
            phoneNumber: "123-456-7890",
            intracomNumber: "ICN123"
        },
        thumbnailSrc: "/Logos/boissard.jpg",
        LiveSrc: "https://6597f7864bef4.streamlock.net/liveorigin/Eglise-Boissard/playlist.m3u8"
    },
    {
        id: 2,
        name: "mont sinai",
        owner: {
            name: "Owner Name 2",
            adress: "Owner Address 2",
            mail: "owner2@example.com",
            phoneNumber: "987-654-3210",
            intracomNumber: "ICN456"
        },
        thumbnailSrc: "/Logos/mont_sinai_thumbnail.jpg",
        LiveSrc: "http://6597f7864bef4.streamlock.net/montsinai/montsinai/playlist.m3u8"
    },
    {
        id: 3,
        name: "ephese",
        owner: {
            name: "Owner Name 3",
            adress: "Owner Address 3",
            mail: "owner3@example.com",
            phoneNumber: "555-555-5555",
            intracomNumber: "ICN789"
        },
        thumbnailSrc: "/Logos/ephese_thumbnail.jpg",
        LiveSrc: "ephese_live_stream_url"
    },
    {
        id: 4,
        name: "horeb",
        owner: {
            name: "Owner Name 4",
            adress: "Owner Address 4",
            mail: "owner4@example.com",
            phoneNumber: "111-222-3333",
            intracomNumber: "ICN101"
        },
        thumbnailSrc: "/Logos/horeb_thumbnail.jpg",
        LiveSrc: "horeb_live_stream_url"
    },
    {
        id: 5,
        name: "elim",
        owner: {
            name: "Owner Name 5",
            adress: "Owner Address 5",
            mail: "owner5@example.com",
            phoneNumber: "222-333-4444",
            intracomNumber: "ICN202"
        },
        thumbnailSrc: "/Logos/elim.jpg",
        LiveSrc: "elim_live_stream_url"
    },
    {
        id: 6,
        name: "vert pré",
        owner: {
            name: "Owner Name 6",
            adress: "Owner Address 6",
            mail: "owner6@example.com",
            phoneNumber: "333-444-5555",
            intracomNumber: "ICN303"
        },
        thumbnailSrc: "/Logos/vert_pre_thumbnail.jpg",
        LiveSrc: "vert_pre_live_stream_url"
    },
    {
        id: 7,
        name: "sion",
        owner: {
            name: "Owner Name 7",
            adress: "Owner Address 7",
            mail: "owner7@example.com",
            phoneNumber: "444-555-6666",
            intracomNumber: "ICN404"
        },
        thumbnailSrc: "/Logos/sion_thumbnail.jpg",
        LiveSrc: "sion_live_stream_url"
    },
    {
        id: 8,
        name: "elim",
        owner: {
            name: "Owner Name 8",
            adress: "Owner Address 8",
            mail: "owner8@example.com",
            phoneNumber: "555-666-7777",
            intracomNumber: "ICN505"
        },
        thumbnailSrc: "/Logos/elim.jpg",
        LiveSrc: "vison_espoir_live_stream_url"
    },
    {
        id: 9,
        name: "mt garizim",
        owner: {
            name: "Owner Name 9",
            adress: "Owner Address 9",
            mail: "owner9@example.com",
            phoneNumber: "666-777-8888",
            intracomNumber: "ICN606"
        },
        thumbnailSrc: "/Logos/mt_garizim_thumbnail.jpg",
        LiveSrc: "mt_garizim_live_stream_url"
    },
    {
        id: 10,
        name: "salem vauclin",
        owner: {
            name: "Owner Name 10",
            adress: "Owner Address 10",
            mail: "owner10@example.com",
            phoneNumber: "777-888-9999",
            intracomNumber: "ICN707"
        },
        thumbnailSrc: "/Logos/salem_vauclin_thumbnail.jpg",
        LiveSrc: "salem_vauclin_live_stream_url"
    },
    {
        id: 11,
        name: "morija",
        owner: {
            name: "Owner Name 11",
            adress: "Owner Address 11",
            mail: "owner11@example.com",
            phoneNumber: "888-999-0000",
            intracomNumber: "ICN808"
        },
        thumbnailSrc: "/Logos/morija_thumbnail.jpg",
        LiveSrc: "morija_live_stream_url"
    },
    {
        id: 12,
        name: "maranatha",
        owner: {
            name: "Owner Name 12",
            adress: "Owner Address 12",
            mail: "owner12@example.com",
            phoneNumber: "999-000-1111",
            intracomNumber: "ICN909"
        },
        thumbnailSrc: "/Logos/maranatha_thumbnail.jpg",
        LiveSrc: "maranatha_live_stream_url"
    },
    {
        id: 13,
        name: "radio vie meilleur",
        owner: {
            name: "Owner Name 13",
            adress: "Owner Address 13",
            mail: "owner13@example.com",
            phoneNumber: "000-111-2222",
            intracomNumber: "ICN010"
        },
        thumbnailSrc: "/Logos/radio_vie_meilleur_thumbnail.jpg",
        LiveSrc: "radio_vie_meilleur_stream_url"
    },
    {
        id: 14,
        name: "espérance FM",
        owner: {
            name: "Owner Name 14",
            adress: "Owner Address 14",
            mail: "owner14@example.com",
            phoneNumber: "111-222-3333",
            intracomNumber: "ICN111"
        },
        thumbnailSrc: "/Logos/espérance_FM_thumbnail.jpg",
        LiveSrc: "espérance_FM_stream_url"
    },
    {
        id: 15,
        name: "Radio Joie de Vivre ",
        owner: {
            name: "Owner Name 15",
            adress: "Owner Address 15",
            mail: "owner15@example.com",
            phoneNumber: "222-333-4444",
            intracomNumber: "ICN222"
        },
        thumbnailSrc: "/Logos/rjv_thumbnail.jpg",
        LiveSrc: "rjv_stream_url"
    },
    // Add more channels with similar structures for the remaining names...
    {
        id: 16,
        name: "labrousse",
        owner: {
            name: "Owner Name 1",
            adress: "Owner Address 1",
            mail: "owne16r@example.com",
            phoneNumber: "123-456-7890",
            intracomNumber: "ICN123"
        },
        thumbnailSrc: "/31k5_logo_eglise_labrousse_miniamlistic.png",
        LiveSrc: "https://6597f7864bef4.streamlock.net/Labrousse/Labrousse/playlist.m3u8"
    },
    {
        id: 17,
        name: "mont sinai",
        owner: {
            name: "Owner Name 2",
            adress: "Owner Address 2",
            mail: "owner17@example.com",
            phoneNumber: "987-654-3210",
            intracomNumber:"ICN456"
        },
        thumbnailSrc: "/31k5_logo_eglise_labrousse_miniamlistic.png",
        LiveSrc: "https://6597f7864bef4.streamlock.net/montsinai/montsinai/playlist.m3u8"
    }
];
