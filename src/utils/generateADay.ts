import { IDate } from "../types/index.interface"

export function generateADay() {
    let date: IDate = {
        name:new Date().toISOString().split('T')[0],
        blocks: [],
        remarks: []
    }

    date.blocks.push({
        name: '00:00 ~ 00:30',
        id: 1,
        type: 0,
    })

    date.blocks.push({
        name: '00:30 ~ 01:00',
        id: 2,
        type: 0,
    })

    date.blocks.push({
        name: '01:00 ~ 01:30',
        id: 3,
        type: 0,
    })

    date.blocks.push({
        name: '01:30 ~ 02:00',
        id: 4,
        type: 0,
    })

    date.blocks.push({
        name: '02:00 ~ 02:30',
        id: 5,
        type: 0,
    })

    date.blocks.push({
        name: '02:30 ~ 03:00',
        id: 6,
        type: 0,
    })

    date.blocks.push({
        name: '03:00 ~ 03:30',
        id: 7,
        type: 0,
    })

    date.blocks.push({
        name: '03:30 ~ 04:00',
        id: 8,
        type: 0,
    })

    date.blocks.push({
        name: '04:00 ~ 04:30',
        id: 9,
        type: 0,
    })

    date.blocks.push({
        name: '04:30 ~ 05:00',
        id: 10,
        type: 0,
    })

    date.blocks.push({
        name: '05:00 ~ 05:30',
        id: 11,
        type: 0,
    })

    date.blocks.push({
        name: '05:30 ~ 06:00',
        id: 12,
        type: 0,
    })

    date.blocks.push({
        name: '06:00 ~ 06:30',
        id: 13,
        type: 0,
    })

    date.blocks.push({
        name: '06:30 ~ 07:00',
        id: 14,
        type: 0,
    })

    date.blocks.push({
        name: '7:00 ~ 7:30 ',
        id: 15,
        type: 0,
    })
    date.blocks.push({
        name: '7:30 ~ 8:00',
        id: 16,
        type: 0,
    })
    date.blocks.push({
        name: '8:00 ~ 8:30',
        id: 17,
        type: 0,
    })
    date.blocks.push({
        name: '8:30 ~ 9:00',
        id: 18,
        type: 0,
    })
    date.blocks.push({
        name: '9:00 ~ 9:30',
        id: 19,
        type: 0,
    })
    date.blocks.push({
        name: '9:30 ~ 10:00',
        id: 20,
        type: 0,
    })
    date.blocks.push({
        name: '10:00 ~ 10:30',
        id: 21,
        type: 0,
    })
    date.blocks.push({
        name: '10:30 ~ 11:00',
        id: 22,
        type: 0,
    })
    date.blocks.push({
        name: '11:00 ~ 11:30',
        id: 23,
        type: 0,
    })
    date.blocks.push({
        name: '11:30 ~ 12:00',
        id: 24,
        type: 0,
    })
    date.blocks.push({
        name: '12:00 ~ 12:30',
        id: 25,
        type: 0,
    })
    date.blocks.push({
        name: '12:30 ~ 13:00',
        id: 26,
        type: 0,
    })
    date.blocks.push({
        name: '13:00 ~ 13:30',
        id: 27,
        type: 0,
    })
    date.blocks.push({
        name: '13:30 ~ 14:00',
        id: 28,
        type: 0,
    })
    date.blocks.push({
        name: '14:00 ~ 14:30',
        id: 29,
        type: 0,
    })
    date.blocks.push({
        name: '14:30 ~ 15:00',
        id: 30,
        type: 0,
    })
    date.blocks.push({
        name: '15:00 ~ 15:30',
        id: 31,
        type: 0,
    })
    date.blocks.push({
        name: '15:30 ~ 16:00',
        id: 32,
        type: 0,
    })
    date.blocks.push({
        name: '16:00 ~ 16:30',
        id: 33,
        type: 0,
    })
    date.blocks.push({
        name: '16:30 ~ 17:00',
        id: 34,
        type: 0,
    })
    date.blocks.push({
        name: '17:00 ~ 17:30',
        id: 35,
        type: 0,
    })
    date.blocks.push({
        name: '17:30 ~ 18:00',
        id: 36,
        type: 0,
    })
    date.blocks.push({
        name: '18:00 ~ 18:30',
        id: 37,
        type: 0,
    })
    date.blocks.push({
        name: '18:30 ~ 19:00',
        id: 38,
        type: 0,
    })
    date.blocks.push({
        name: '19:00 ~ 19:30',
        id: 39,
        type: 0,
    })
    date.blocks.push({
        name: '19:30 ~ 20:00',
        id: 40,
        type: 0,
    })
    date.blocks.push({
        name: '20:00 ~ 20:30',
        id: 41,
        type: 0,
    })
    date.blocks.push({
        name: '20:30 ~ 21:00',
        id: 42,
        type: 0,
    })
    date.blocks.push({
        name: '21:00 ~ 21:30',
        id: 43,
        type: 0,
    })
    date.blocks.push({
        name: '21:30 ~ 22:00',
        id: 44,
        type: 0,
    })
    date.blocks.push({
        name: '22:00 ~ 22:30',
        id: 45,
        type: 0,
    })
    date.blocks.push({
        name: '22:30 ~ 23:00',
        id: 46,
        type: 0,
    })
    date.blocks.push({
        name: '23:00 ~ 23:30',
        id: 47,
        type: 0,
    })
    date.blocks.push({
        name: '23:30 ~ 24:00',
        id: 48,
        type: 0,
    })

    return date
}