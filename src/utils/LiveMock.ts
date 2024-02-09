interface ChannelInterface {
    id : string;
    name : string;
    type: "live" | "replay";
    source : string;

}

const liveMock = [
    {
        id : "1",
        name : "rvm",
        type: "live",
        source : "http://stream2.transvision.fr:1935/rvm/rvm2/playlist.m3u8",
    },
    {
        id : "2",
        name : "esperancefm",
        type: "live",
        source : "http://stream2.transvision.fr:1935/esperancefm/myStream/playlist.m3u8",
    },
    {
        id : "3",
        name : "radiosun97",
        type: "live",
        source: "http://stream2.transvision.fr:1935/radiosun97/myStream/playlist.m3u8",
    },
    {
        id : "4",
        name : "stgeorgescanada",
        type: "live",
        source: "http://stream2.transvision.fr:1935/Stgeorgescanada/myStream/playlist.m3u8",
    },
    {
        id : "5",
        name : "bonair",
        type: "live",
        source: "http://stream2.transvision.fr:1935/bonair/bonair/playlist.m3u8",
    },
    {
        id : "6",
        name : "visionespoirtv",
        type: "live",
        source: "http://stream2.transvision.fr:1935/visionespoirtv/visionespoirtv/playlist.m3u8",
    },
    {
        id : "7",
        name : "smyrne",
        type: "live",
        source: "http://stream2.transvision.fr:1935/smyrne/smyrne/playlist.m3u8",
    },
    {
        id : "8",
        name : "boissard",
        type: "live",
        source: "http://stream2.transvision.fr:1935/boissard/boissard/playlist.m3u8",
    },
    {
        id : "9",
        name : "grosmorne",
        type: "live",
        source: "http://stream2.transvision.fr:1935/grosmorne/myStream/playlist.m3u8",
    },
    {
        id : "10",
        name : "galaad",
        type: "live",
        source: "http://stream2.transvision.fr:1935/galaad/galaad/playlist.m3u8",
    },
    {
        id : "11",
        name : "montgarizim",
        type: "live",
        source : "http://stream2.transvision.fr:1935/montgarizim/montgarizim/playlist.m3u8",
    },
    {
        id : "12",
        name : "horeblive",
        type: "live",
        source : "http://stream2.transvision.fr:1935/horeblive2/horeblive2/playlist.m3u8",
    },
    {
        id : "13",
        name : "eglisecapesterre",
        type: "live",
        source : "http://stream2.transvision.fr:1935/eglisecapesterre/myStream/playlist.m3u8",
    },
    {
        id : "14",
        name : "labrousse",
        type: "live",
        source : "http://stream2.transvision.fr:1935/Labrousse/Labrousse/playlist.m3u8",
    },
    {
        id : "15",
        name : "ebenezer",
        type: "live",
        source : "http://stream2.transvision.fr:1935/ebenezer/ebenezer/playlist.m3u8",
    },
    {
        id : "16",
        name : "salemguyane",
        type: "live",
        source : "http://stream2.transvision.fr:1935/salemguyane/salemguyane/playlist.m3u8",
    },
    {
        id : "17",
        name : "douville",
        type: "live",
        source : "http://stream2.transvision.fr:1935/douville/douville/playlist.m3u8",
    },
    {
        id : "18",
        name : "sainterose",
        type: "live",
        source : "http://stream2.transvision.fr:1935/sainterose/sainterose/playlist.m3u8",
    },
    {
        id : "19",
        name : "elim",
        type: "live",
        source : "http://stream2.transvision.fr:1935/elim/elim/playlist.m3u8",
    },
    {
        id : "20",
        name : "hebron",
        type: "live",
        source : "http://stream2.transvision.fr:1935/hebron/hebron/playlist.m3u8",
    },
    {
        id : "21",
        name : "montsinai",
        type: "live",
        source : "http://stream2.transvision.fr:1935/montsinai/montsinai/playlist.m3u8"
    },
    {
        id : "22",
        name : "saintmartin",
        type: "live",
        source : "http://stream2.transvision.fr:1935/saintmartin/saintmartin/playlist.m3u8"
    },
    {
        id : "23",
        name : "morija",
        type: "live",
        source : "http://stream2.transvision.fr:1935/morija/morija/playlist.m3u8"
    },
    {
        id : "24",
        name : "creteil",
        type: "live",
        source : "http://stream2.transvision.fr:1935/creteil/creteil/playlist.m3u8"
    },
    {
        id : "25",
        name : "evry",
        type: "live",
        source : "http://stream2.transvision.fr:1935/evry/evry/playlist.m3u8"
    },
    {
        id : "26",
        name : "chauvel",
        type: "live",
        source : "http://stream2.transvision.fr:1935/chauvel/chauvel/playlist.m3u8"
    },
    {
        id : "27",
        name : "salemvauclin",
        type: "live",
        source : "http://stream2.transvision.fr:1935/salemvauclin/salemvauclin/playlist.m3u8"
    },
    {
        id : "28",
        name : "ephese",
        type: "live",
        source : "http://stream2.transvision.fr:1935/ephese/ephese/playlist.m3u8"
    },
    {
        id : "29",
        name : "gospelkreol",
        type: "live",
        source : "http://stream2.transvision.fr:1935/gospelkreol/gospelkreol/playlist.m3u8"
    },
    {
        id : "30",
        name : "meodh",
        type: "live",
        source : "http://stream2.transvision.fr:1935/meodh/meodh/playlist.m3u8"
    },
    {
        id : "31",
        name : "hope media haiti",
        type: "live",
        source: "http://stream2.transvision.fr:1935/hopemediahaiti/hopemediahaiti/playlist.m3u8"
    },
    {
        id : "32",
        name : "vert pre",
        type: "live",
        source : "http://stream2.transvision.fr:1935/vertpre/vertpre/playlist.m3u8",
    },
    // http://stream2.transvision.fr:1935/maranathaacajou/maranathaacajou/playlist.m3u8
    {
        id : "33",
        name : "maranatha acacou",
        type: "live",
        source : "http://stream2.transvision.fr:1935/maranathaacajou/maranathaacajou/playlist.m3u8",
    },
    // http://stream2.transvision.fr:1935/rouselle/rouselle/playlist.m3u8
    {
        id : "34",
        name : "rouselle",
        type: "live",
        source : "http://stream2.transvision.fr:1935/rouselle/rouselle/playlist.m3u8",
    },
    // http://stream2.transvision.fr:1935/laurizon/laurizon/playlist.m3u8
    {
        id : "35",
        name : "laurizon",
        type: "live",
        source : "http://stream2.transvision.fr:1935/laurizon/laurizon/playlist.m3u8",
    },
    // http://148.72.170.92:1935/rvmlive/myStream/playlist.m3u8
    {
        id : "36",
        name : "rvm",
        type: "live",
        source : "http://148.72.170.92:1935/rvmlive/myStream/playlist.m3u8"
    },
    

]