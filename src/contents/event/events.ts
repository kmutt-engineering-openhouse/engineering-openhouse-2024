import LXThumbnail from '../images/center/LX-Thumbnail.jpeg'
import INNOXThumbnail from '../images/center/InnoX-Thumbnail.jpg'
import INNOX from '../images/center/InnoX.jpg'
export interface IEventInfo {
  title: string
  link?: string
  linkable: boolean
  description?: string
  description2?: {
    title: string
    desc: string
  }
  thumbnail: string
  image?: string
  lowerDescription?: string
  rounds?: IActivityRound[]
  location?: {
    text: string
    map: string
  }
  contact?: {
    name: string
    tel: string
  }
  social?: {
    title: string
    link: string
  }
}

export interface IActivityRound {
  title: string
  list?: string[]
  schedules: IActivitySchedule[]
}

export interface IActivitySchedule {
  date?: string
  time: string
  amount: number
}

export const eventActivities: IEventInfo[] = [
  {
    title: 'กิจกรรมพี่พาน้องทัวร์',
    link: 'starter-tour',
    linkable: true,
    description:
      'สำหรับน้อง ๆ คนไหนที่มางานเทศกาล Engineering Open House ที่ มจธ. แล้ว น้อง ๆ รู้สึกว่าไม่รู้จะเดินชมภาควิชาไหนกันก่อนแน่  วันนี้พี่ ๆ ขอแนะนำกิจกรรมที่จะอาสาพาน้องชมรมภาควิชาต่าง ๆ ที่น่าสนใจ พร้อมชมบรรยกาศสิ่งแวดล้อม สิ่งอำนวยความสะดวกของคณะและของแต่ละภาควิชา พร้อมใกล้ชิดกับพี่ของภาควิชาต่าง ๆ ด้วย ! สำหรับน้อง ๆ ที่ลงทะเบียนและเข้าร่วมกิจกรรมพี่พาน้องทัวร์ มีโอกาสได้รับของที่ระลึกเฉพาะผู้เข้าร่วมกิจกรรมพี่พาน้องทัวร์เท่านั้นด้วยน้า',
    thumbnail: LXThumbnail,
    image: LXThumbnail,
    lowerDescription: '*เปิดลงทะเบียนล่วงหน้าเท่านั้น*',
    contact: {
      name: 'นางสาว จามิญชญา บัวชูสิริรังสี (พี่เค้ก)',
      tel: '0626536161',
    },
    location: {
      text: 'เจอกันที่โถงใต้อาคารวิศววัฒนะ (S4) น้อง ๆ ที่จะเข้าในแต่ละรอบ โปรดมาก่อน 15-20 นาที',
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3877.127566137747!2d100.4928696!3d13.6500032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a252227bbaa7%3A0x3070526fef2a5038!2z4Lit4Liy4LiE4Liy4Lij4Lin4Li04Lio4Lin4Lin4Lix4LiS4LiZ4LiwIEtod2FlbmcgQmFuZyBNb3QsIEtoZXQgVGh1bmcgS2hydSwgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDE0MA!5e0!3m2!1sen!2sth!4v1696080363244!5m2!1sen!2sth',
    },
    rounds: [
      {
        title: 'ภาควิชา',
        list: ['วิศวกรรมคอมพิวเตอร์', 'วิศวกรรมอุตสาหการ', 'วิศวกรรมเครื่องกล', 'วิศวกรรมเครื่องมือและวัสดุ'],
        schedules: [
          {
            time: '08.55 - 10.40',
            amount: 25,
          },
          {
            time: '10.55 - 12.40',
            amount: 25,
          },
          {
            time: '12.55 - 14.40',
            amount: 25,
          },
          {
            time: '14.55 - 16.40',
            amount: 25,
          },
        ],
      },
      {
        title: 'ภาควิชา',
        list: ['วิศวกรรมเคมี', 'วิศวกรรมโยธา', 'วิศวกรรมสิ่งแวดล้อม'],
        schedules: [
          {
            time: '09.00 - 10.20',
            amount: 25,
          },
          {
            time: '11.00 - 12.20',
            amount: 25,
          },
          {
            time: '13.00 - 14.20',
            amount: 25,
          },
          {
            time: '15.00 - 16.20',
            amount: 25,
          },
        ],
      },
      {
        title: 'ภาควิชา',
        list: ['วิศวกรรมไฟฟ้า', 'วิศวกรรมเครื่องมือและระบบควบคุม', 'วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม'],
        schedules: [
          {
            time: '09.05 - 10.25',
            amount: 25,
          },
          {
            time: '11.05 - 12.25',
            amount: 25,
          },
          {
            time: '13.05 - 14.25',
            amount: 25,
          },
          {
            time: '15.05 - 16.25',
            amount: 25,
          },
        ],
      },
    ],
  },
  {
    title: 'INNO-X',
    link: 'INNO-X',
    linkable: true,
    thumbnail: INNOXThumbnail,
    image: INNOX,
    description:
      'Innovation Exchange (Inno-X) เป็นสถานที่ที่เปิดขึ้นมาเพื่อให้บริการพื้นที่การเรียนรู้ ฝึกปฎิบัติ ทำต้นแบบชิ้นงาน งานประดิษฐ์ งานโครงงาน สนับสนุนงานวิจัย ตลอดจนการฝึกอบรม เผยแพร่ การใช้เครื่องมือ เทคโนโลยีและนวัตกรรมสมัยใหม่ เพื่อสนับสนุนการเรียนตามหลักสูตรและการพัฒนาตนเองของทั้งนักศึกษาและบุคลากรของ มจธ.',
    description2: {
      title: 'Workshop',
      desc: 'ขอเชิญชวนน้องมาฝึกอบรมทักษะ การใช้งานเครื่อง 3D Printer และเครื่อง Laser Cut เพื่อเป็นแนวทางในการสร้างนวัตกรรมของน้อง ๆ ต่อไป  เรียนรู้การใช้งานเครื่องและการใช้โปรแกรมเพื่อสร้างชิ้นงาน ทั้ง 2 ชนิดอย่างถูกต้อง และการปฏิบัติ สาธิตกระบวนการทำงานของเครื่อง 3D Printer และ การใช้งานเครื่อง Laser Cut พร้อมทั้งนี้ น้อง ๆ ก็จะมีโอกาสได้ลงมือปฏิบัติด้วยตนเอง เพื่อสร้างชิ้นงานพวงกุญแจ เป็นของที่ระลึก !!',
    },
    social: {
      title: 'Innovation Exchange KMUTT',
      link: 'https://www.facebook.com/people/Innovation-Exchange-KMUTT/100064519611257/',
    },
    location: {
      text: 'INNOVATION EXCHANGE ชั้น 1 อาคารวิศววัฒนะ (S4)',
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3877.127566137747!2d100.4928696!3d13.6500032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a252227bbaa7%3A0x3070526fef2a5038!2z4Lit4Liy4LiE4Liy4Lij4Lin4Li04Lio4Lin4Lin4Lix4LiS4LiZ4LiwIEtod2FlbmcgQmFuZyBNb3QsIEtoZXQgVGh1bmcgS2hydSwgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDE0MA!5e0!3m2!1sen!2sth!4v1696080363244!5m2!1sen!2sth',
    },
    rounds: [
      {
        title: 'รอบ',
        schedules: [
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
        ],
      },
    ],
  },
  {
    title: 'กิจกรรมส่วนกลาง',
    linkable: false,
    thumbnail: LXThumbnail,
  },
]
