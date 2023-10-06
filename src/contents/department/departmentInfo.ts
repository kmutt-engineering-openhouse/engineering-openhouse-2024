import Thumbnail from '../images/DepartmentThumbnail.png'
import { DepartmentEnum } from './enum'
import { IActivity, IContact, IRC, ISubWorkshop, IWorkshopSchedule } from './types'

export interface IDepartmentInfo {
  name: {
    en: string
    th: string
    initial: DepartmentEnum
  }
  image: string
  location: {
    exhibition?: string
    workshop?: string
    map?: string
  }
  activities?: IActivity[]
  workshopSchedule?: IWorkshopSchedule[]
  subWorkshopSchedule?: ISubWorkshop[]
  rc?: IRC[]
  contact: IContact
}

export const departmentInfo: IDepartmentInfo[] = [
  {
    name: {
      en: 'Civil Engineering',
      th: 'ภาควิชาวิศวกรรมโยธา',
      initial: DepartmentEnum.CE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการวิศวกรรมโยธา: ชั้น 1  อาคารเรียนรวม 5 (S11)',
      workshop: 'จุดนัดลงทะเบียน workshop: ชั้น 1 อาคารเรียนรวม 5 (S11)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/kmutt.ce',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/cekmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมโยธา ตั้งอยู่ที่ อาคารเรียนรวม 5 (S11) ชั้น 1 บริเวณฝั่งด้านหน้าตึกภาควิชาวิศวกรรมเคมี จะมีการแนะนำรายละเอียดต่าง ๆ เกี่ยวกับวิศวกรรมโยธาเพื่อให้น้อง ๆ ได้เรียนรู้เกี่ยวกับสาขาวิชาต่าง ๆ ในภาควิชาวิศวกรรมโยธาจากคำแนะนำของพี่ ๆ เพื่อให้น้อง ๆ ได้รับความรู้และเป็นแนวทางประกอบการตัดสินใจในการศึกษาต่อในระดับอุดมศึกษา นอกจากนี้น้อง ๆ ยังได้รับการแนะนำเรื่องการสอบเข้าและการเตรียม Portfolio ของภาควิชาวิศวกรรมโยธาจากรุ่นพี่  และ  Workshop เพื่อให้น้อง ๆ ได้เข้าใจเกี่ยวกับวิศวกรรมโยธามากยิ่งขึ้น พร้อมทั้งของที่ระลึกมากมาย และ Folksong จากรุ่นพี่ตลอดกิจกรรมในงาน',
      },
      {
        title: 'Workshop',
        description:
          'กิจกรรมที่ให้ผู้เข้าร่วมลงมือปฏิบัติในห้องปฏิบัติการของแต่ละภาควิชา โดยมีทั้งหมด 4 รอบ รอบละ 1 ชั่วโมง 30 นาที โดยผู้เข้าร่วมจะได้รับ E-stamp และใบประกาศนียบัตรจากภาควิชา ซึ่งการลงทะเบียนจะเป็นแบบ walk-in เท่านั้น',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Mechanical Engineering',
      th: 'ภาควิชาวิศวกรรมเครื่องกล',
      initial: DepartmentEnum.ME,
    },
    image: Thumbnail,
    location: {
      exhibition:
        'นิทรรศการวิศวกรรมเครื่องกล: ลานหน้าอาคารภาควิชาวิศวกรรมเครื่องกล และชั้น 1 ภายในอาคารภาควิชาวิศวกรรมเครื่องกล',
      workshop: 'จุดนัดลงทะเบียน workshop:  ลานหน้าอาคารภาควิชาวิศวกรรมเครื่องกล',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/kmutt.me',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/kmutt_me',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมเครื่องกล จะพาน้อง ๆ ไปพบกับผลงานที่น่าตื่นตาตื่นใจ จากรุ่นพี่วิศวกรรมเครื่องกล ไม่ว่าจะเป็น รถ Formula จากชมรม Formula, ต้นรถประหยัดพลังงาน จากชมรม EDR, Cubesat thrust, Drone และอื่น ๆ ที่น้องคาดไม่ถึงว่าวิศวกรรมเครื่องกลก็ทำได้ !  พร้อมทั้งความรู้ความเข้าใจในวิชาชีพที่กว้างขวางบนโลกความเป็นจริง นอกจากนี้ยังมีการนำเสนอข้อมูลของภาควิชาและข้อมูลหลักสูตรที่จะสร้างความประทับใจอย่างแน่นอน แล้วมาพบกันที่ลานหน้าภาควิชาวิศวกรรมเครื่องกล',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมเครื่องกล ที่จะพาน้อง ๆ ไปพบกับแลปในภาควิชาต่าง ๆ ที่อัดแน่นไปด้วยไปด้วยความเป็นเครื่องกล ทั้งนี้น้อง ๆ จะได้ลองฝึกเขียนแบบบนกระดาษจริง ๆ และทดลองเขียนแบบด้วยโปรแกรม Solidworks',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Production Engineering',
      th: 'ภาควิชาวิศวกรรมอุตสาหการ',
      initial: DepartmentEnum.PE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมอุตสาหการ: ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/PEMCEKMUTT',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/pe_mce.kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมอุตสาหการ จะพาน้อง ๆ ไปพบกับผลงานของรุ่นพี่จากทั้ง 2 สาขาวิชา คือ วิศวกรรมอุตสาหการ และ วิศวกรรมแมคคาทรอนิกส์ พร้อมทั้งแนะนำหลักสูตรการเรียนการสอนและความแตกต่างจากทั้ง 2 สาขาวิชานี้ นอกจากนั้นพี่ ๆ จะพาน้อง ๆ มามารู้จักการใช้อุปกรณ์และการต่อวงจรอิเล็กทรอนิกส์พื้นฐาน และกิจกรรมต่าง ๆ ที่อยู่ในนิทรรศการของภาควิชาอุตสาหการฯ ไมว่าจะเป็นเกมเพื่อชิงของรางวัลพิเศษจากภาควิชาฯ แล้วพบกัน ณ นิทรรศการภาควิชาวิศวกรรมอุตสาหการ ที่ ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมอุตสาหการ ที่จะพาน้อง ๆ ไปเรียนรู้สถานที่เรียนจริง ๆ ของพี่ ๆ วิศวกรรมอุตสาหการและวิศวกรรมแมคคาทรอนิกส์ และตะลุยกับช๊อปในภาควิชาฯ ทั้ง 4 ช๊อป คือ',
        subDescription: [
          {
            name: 'ช๊อปหล่อ',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตงานหล่อ และการนําตัวอย่างชิ้นงานหล่อมาจัดแสดง เพื่อให้น้อง ๆ เห็นถึงความสําคัญและความจําเป็นของงานหล่อในการผลิตชิ้นส่วนของงานอุตสาหกรรม',
          },
          {
            name: 'ช๊อป Machine',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการใช้เครื่องจักรจากเจ้าหน้าที่ เช่น เครื่องกลึง เครื่องกัด เพื่อให้ได้เห็นภาพความสําคัญของการขัดแต่งรูปและผิวของชิ้นงาน หรือการใช้เครื่องจักรทําการสร้างชิ้นงาน เช่น C-Clamp ค้อน ต่าง ๆ',
          },
          {
            name: 'ช๊อปการเชื่อม',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตและมีโอกาสได้ลองปฏิบัติงานเชื่อมจริง ๆ ไม่ว่าจะเป็น SMAW และ GMAW เพื่อให้เข้าใจและเห็นถึงความสําคัญของการเชื่อมในงานประกอบชิ้นส่วน อุตสาหกรรมจริง',
          },
          {
            name: 'ช๊อปแมคคาทรอนิกส์',
            description:
              'น้อง ๆ จะได้รับชมการสาธิต หลักการทำงานของระบบ pnuematic และ ระบบอัตโนมัติ ด้วย PLC เพื่อให้เห็นภาพความสำคัญของระบบต่างๆที่นำมาประยุกต์ใช้ในการเป็นวิศวกรรมแมคคาทรอนิกส์ และได้มีโอกาสลองลงมือปฏิบัติทดสอบทั้ง 2 ระบบด้วย',
          },
        ],
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Electrical Engineering',
      th: 'ภาควิชาวิศวกรรมไฟฟ้า',
      initial: DepartmentEnum.EE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมไฟฟ้า:  ชั้น 4 อาคารเรียนรวม 4 (S12) ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 4 อาคารเรียนรวม 4 (S12)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/ee.kmutt',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/electrical_engineering_kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมไฟฟ้า จัดขึ้นที่ภาควิชาวิศวกรรมไฟฟ้า ชั้น 4 อาคารเรียนรวม 4 (S12) โดยน้อง ๆ จะได้เรียนรู้กับการเรียนในภาควิชาวิศวกรรมไฟฟ้า และหลักสูตร ทั้ง 2 หลักสูตร คือ วิศวกรรมไฟฟ้า และวิศวกรรมไฟฟ้า (ระบบไฟฟ้า อิเล็กทรอนิกส์กำลัง และพลังงาน) แนวทางการศึกษาต่อในวิศวกรรมไฟฟ้า พร้อมรับชมผลงานจากพี่ ๆ ภาควิชาวิศวกรรมไฟฟ้า',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมไฟฟ้า ที่จะพาน้อง ๆ ไปสนุกกับกิจกรรมในรูปแบบ Activity based learning จากพี่ ๆ วิศวกรรมไฟฟ้า โดยแบ่งให้น้อง ๆ ได้เลือกทั้งหมด 4 แลป คือ',
        subDescription: [
          {
            name: 'Measurement Lab',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการใช้งานของเครื่องมือวัดทางไฟฟ้าที่สำคัญต่าง ๆ เช่น Multimeter, Oscilloscope และมีโอกาสให้น้อง ๆ ได้ทดลองใช้เครื่องมือจริงด้วย',
          },
          {
            name: 'Motor Control',
            description:
              'น้อง ๆ จะได้รู้จักเกี่ยวกับวงจร Motor Control ที่เป็นส่วนประกอบสำคัญในหลายอุปกรณ์ที่อยู่รอบตัวเราในชีวิตประจำวันทั้งหลัการและอุปกรณ์จริง พร้อมทั้งชมการสาธิตและลองลงมือปฏิบัติต่อวงจร Motor Control อีกด้วย',
          },
          {
            name: 'High Voltage Lab',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการทำการทดลองในงานไฟฟ้าแรงดันสุูง หรือ High Voltage ซึ่งยากจะได้รับชมในชีวิตประจำวัน น้องจะได้เห็นภาพในโลกของไฟฟ้าที่เหนือไปอีกขั้นกับ 5 การทดลอง ได้แก่ 1.แรงดันกระจายหรือ Voltage Distribution, 2.ความถี่ธรรมชาติหรือ Resonance, 3.Surface discharge, 4.การทดลองพิสูจน์ กฎของฟาราเดย์, 5.จําลองการเกิดกระแสฟ้าผ่า',
          },
        ],
      },
    ],
    subWorkshopSchedule: [
      {
        title: 'Measurement Lab',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 20,
          },
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
            date: '10/14/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
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
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
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
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
        ],
      },
      {
        title: 'Motor Control',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
        ],
      },
      {
        title: 'High Voltage lab',
        schedules: [
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 30,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 30,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 30,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 30,
          },
        ],
      },
      {
        title: 'Illumination Laboratory (E-LU)',
        schedules: [
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
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
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
        ],
      },
    ],
  },
  {
    name: {
      en: 'Electronics and Telecommunication Engineering',
      th: 'ภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม',
      initial: DepartmentEnum.ENE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมไฟฟ้า:  ชั้น 9 อาคารเรียนรวม 4 (S12)',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 9 อาคารเรียนรวม 4 (S12)',
    },
    contact: {
      social: [
        {
          name: 'Instagram',
          link: 'https://instagram.com/Ene_kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม ซึ่งจัดขึ้นที่ภาควิชาอิเล็กทรอนิกส์ฯ ชั้น 9 อาคารเรียนรวม 4 (S12) โดยน้อง ๆ จะได้เรียนรู้กับการเรียน แนะนําภาควิชาว่าภาควิชาฯ นี้ มีอะไรและเรียนอะไรบ้าง พร้อมทั้งตอบข้อสงสัยว่าภาควิชาอิเล็กทรอนิกส์และโทรคมนาคมแตกต่างกับภาควิชาไฟฟ้าและคอมพิวเตอร์อย่างไร และจบมาแล้ว ไปทํางานสายไหนได้บ้างมีรุ่นพี่ในภาควิชาจบแล้วไปทํางานอะไร บริษัทอะไรบ้าง อีกทั้งรับชมผลงานของรุ่นพี่ภาควิชาฯ ที่จะทําให้เห็นว่า “อิเล็กทรอนิกส์ คือ จุดเริ่มที่ยิ่งใหญ่” นอกจากนี้สำหรับน้อง ๆ สายหาทุนสนับสนุนศึกษาต่อ จะต้องชอบแน่นอน เพราะในนิทรรศการก็มีการแนะนำทุนการศึกษา ความน่าสนใจ พร้อมวิธีการเตรียมตัว',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม จะแบ่ง Workshop ให้น้อง ๆ เลือกเป็น 2 แลป คือ',
        subDescription: [
          {
            name: 'Lab วงจรไฟกระพริบ',
            description:
              'น้อง ๆ จะได้รู้จักและเรียนรู้การต่อวงจรไฟกระพริบเบื้องต้นจากรุ่นพี่วิศวกรรมอิเล็กทรอนิกส์ฯ ซึ่งจะทำให้น้อง ๆ ลองปฏิบัติงานจริง และจะเห็นถึงการต่อยอดดัดแปลงวงจรไฟกระพริบเบื้องต้น สามารถนำไปดัดแปลงประยุกต์เป็นอะไรได้บ้าง เช่น ทำไฟกะพริบ, การกำเนิดเสียง, การเตือนภัย ฯลฯ',
          },
          {
            name: 'Lab วงจร Full wave bridge rectifier',
            description:
              'น้อง ๆ จะได้เรียนรู้กับเร็กติไฟเออร์เต็มคลื่นแบบบริดจ์ ( Full Wave Bridge Rectifier) หรือวงจรแปลงไฟฟ้ากระแสสลับเป็นกระแสตรง ซึ่งเป็นวงจรที่สำคัญในอุปกรณ์ไฟฟ้าในบ้านหลายชนิด น้อง ๆ จะได้เข้าใจถึงประเภทของวงจร Full wave bridge rectifier พร้อมทั้งได้ทดลองกับวงจรจริง ซึ่งจะทำให้น้องเห็นภาพมากกว่าเดิม',
          },
        ],
      },
    ],
    subWorkshopSchedule: [
      {
        title: 'Lab วงจรไฟกระพริบ',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 42,
          },
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 42,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 42,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
            amount: 42,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 42,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 42,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 42,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 42,
          },
        ],
      },
      {
        title: 'Lab วงจร Full wave bridge rectifier',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 36,
          },
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 36,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 36,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
            amount: 36,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 36,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 36,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 36,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 36,
          },
        ],
      },
    ],
  },
  {
    name: {
      en: 'Environmental Engineering',
      th: 'ภาควิชาวิศวกรรมสิ่งแวดล้อม',
      initial: DepartmentEnum.ENV,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมสิ่งแวดล้อม:  ชั้น 1 อาคารเรียนรวม 4 (S12) ฝั่งบริเวณหน้าลิฟต์',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 1 อาคารเรียนรวม 4 (S12) ฝั่งบริเวณหน้าลิฟต์',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/p/Environmental-Engineering-KMUTT-100040198514250/',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/envkmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมสิ่งแวดล้อม จัดขึ้นที่ชั้น 1 อาคารเรียนรวม 4 (S12) ฝั่งบริเวณหน้าลิฟต์ ภายในนิทรรศการ น้อง ๆ จะพบการแนะแนว การศึกษาและการศึกษาต่อ กับผลงานต่าง ๆ ความเป็นวิศวกรรมสิ่งแวดล้อม ไม่ว่าจะเป็นโมเดลยูนิตบำบัดน้ำเสีย หรือน้ำประปา และ อื่น ๆ รวมทั้งกิจกรรมที่ร่วมสนุกต่าง ๆ เพื่ออนุรักษฺสิ่งแวดล้อมไปกับวิศวฯ สิ่งแวดล้อม และกิจกรรมดี ๆ จากพี่สิ่งแวดล้อมจะมอบให้น้อง ๆ ในนิทรรศการ',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมสิ่งแวดล้อม จะพาน้อง ๆ ไปร่วมกิจกรรมฐานที่ได้ทั้งสาระความรู้ และความสนุกที่เรียกได้ว่า ความเป็นวิศวฯ สิ่งแวดล้อมตัวจริง  ทั้ง 4 ฐานกิจกรรม คือ ฐานตรวจสอบคุณภาพของน้ำ, ฐาน Jar test, ฐาน Adsorption, ฐาน Waste to Energy และฐาน Air แค่ชื่อก็ดูน่าสนใจแล้ว ในแต่ละฐานน้องจะได้มีโอกาสได้ชมเครื่องมือที่น่าสนใจ ชมการสาธิต และมีโอกาสได้ลองปฎิบัติอีกด้วย รู้อย่างนี้แล้วอย่าพลาดโอกาสไปเชียว น้อง ๆ ลงทะเบียนหน้างาน ได้ที่นิทรรศการของภาควิชาฯ',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 60,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 60,
      },
      {
        date: '10/14/2023',
        time: '15.20 – 16.50',
        amount: 60,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 60,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 60,
      },
      {
        date: '10/15/2023',
        time: '15.20 – 16.50',
        amount: 60,
      },
      {
        date: '10/16/2023',
        time: '09.30 – 11.00',
        amount: 60,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 60,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 60,
      },
    ],
  },
  {
    name: {
      en: 'Control System and Instrumentation Engineering',
      th: 'ภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด',
      initial: DepartmentEnum.INC,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด:  ชั้น 6 อาคารเรียนรวม 4 (S12) ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 6 อาคารเรียนรวม 4 (S12)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/inckmutt/',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/inckmutt_official',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด จัดขึ้นที่ชั้น 6 อาคารเรียนรวม 4 (S12) ภายในนิทรรศการ น้อง ๆ จะได้พบกับกิจกรรมแนะนําภาควิชา แนะนำการเรียนการสอน และหลักสูตรต่าง ๆ ที่เปิดสอน นอกจากนี้ น้องจะได้ชมการจำลองการทำงานของ Robot Arm ในสายการผลิต และผลงานจากรุ่นพี่และคณะอาจารย์ทั้งงานวิจัยเจ๋ง ๆ และโปรเจกต์ต่าง ๆ ทั้งนี้ยังมีโอกาสได้ถามตอบข้อสงสัยในภาควิชาฯ อีกด้วย',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด จะพาน้อง ๆ ไปผจญภัยในโลกของวิศววัดคุมฯ ในแลปต่าง ๆ เช่น Lab PLC, Lab Water Flow ซึ่งจะทำให้น้องได้เห็นภาพรวมในงานของวิศวกรรมระบบควบคุมและเครื่องมือวัดมากขึ้น และยังได้มีโอกาสถามข้อสงสัยกับรุ่นพี่ตัวเป็น ๆ ในกิจกรรม Q&A อีกด้วย',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 20,
      },
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
        date: '10/14/2023',
        time: '15.20 – 16.50',
        amount: 20,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
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
        date: '10/15/2023',
        time: '15.20 – 16.50',
        amount: 20,
      },
      {
        date: '10/16/2023',
        time: '09.30 – 11.00',
        amount: 20,
      },
      {
        date: '10/16/2023',
        time: '11.20 – 12.50',
        amount: 20,
      },
    ],
  },
  {
    name: {
      en: 'Computer Engineering',
      th: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
      initial: DepartmentEnum.CPE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการวิศวกรรมคอมพิวเตอร์: ชั้น 10 อาคารวิศววัฒนะ (S4)',
      workshop: 'จุดนัดลงทะเบียน workshop: ชั้น 11 อาคารวิศววัฒนะ (S4)',
    },
    contact: {
      social: [
        {
          name: 'Facebook Admission',
          link: 'https://www.facebook.com/CPEKMUTTADMISSION',
        },
        {
          name: 'Facebook องค์กรนักศึกษา',
          link: 'https://www.facebook.com/student.cpe.kmutt',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/cpe_studentunion',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'งานนิทรรศการเกี่ยวกับวิศวกรรมคอมพิวเตอร์ (CPE) เปิดโอกาสให้น้อง ๆ เดินชมและสอบถามเกี่ยวกับภาควิชาวิศวกรรมคอมพิวเตอร์ กับพี่ ๆ นักศึกษาได้โดยตรง มีกิจกรรมหลากหลายเช่น Admission Information พี่ ๆ ให้คำปรึกษาเกี่ยวกับการสอบเข้าภาควิชาวิศวกรรมคอมพิวเตอร์ในรอบต่าง ๆ  Project Exhibition น้อง ๆ ได้เรียนรู้จากการนำเสนอโครงงาน CPE ที่น่าสนใจจากพี่ ๆ  Finding about CPE พี่ ๆ พร้อมตอบข้อสงสัยเกี่ยวกับวิศวกรรมคอมพิวเตอร์.งานนี้เป็นโอกาสที่ดีให้น้อง ๆ ได้รับข้อมูลและคำปรึกษาจากพี่ ๆ และเรียนรู้เพิ่มเติมเกี่ยวกับ CPE พบกันที่ ชั้น 10 อาคารวิศววัฒนะ (S4)',
      },
      {
        title: 'Workshop',
        description:
          'พบกับการเรียนรู้แบบเต็มไปด้วยกิจกรรมร่วมเปิดประตูความรู้ในโลกของวิศวกรรมคอมพิวเตอร์ผ่านกิจกรรม Workshop ที่น่าสนใจมากมาย! เราจะพาน้อง ๆ ไปค้นหาคำตอบเกี่ยวกับวิศวกรรมคอมพิวเตอร์แบบที่น่าสนุกและเป็นประสบการณ์ตลอดกาล',
        subDescription: [
          {
            name: 'Sorting Algorithm',
            description:
              'รู้จักกับวิธีการจัดเรียงข้อมูลที่มีประสิทธิภาพด้วยการใช้ algorithm ต่าง ๆ ผ่านการเล่นและทดลองสร้างอัลกอริทึมเอง',
          },
          {
            name: 'Markdown (.md)',
            description:
              'ลองสัมผัสบรรยากาศในห้องเรียนจริงผ่านการทำแล็บเขียนโปรแกรมเบื้องต้นในภาษา Markdown ซึ่งเป็นภาษาพื้นฐานที่จะมีประโยชน์ในชีวิตจริง',
          },
        ],
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/14/2023',
        time: '11.20 – 12.30',
        amount: 100,
      },
      {
        date: '10/14/2023',
        time: '13.50 – 15.00',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '11.20 – 12.30',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '13.50 – 15.00',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '11.20 – 12.30',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '13.50 – 15.00',
        amount: 100,
      },
    ],
  },
  {
    name: {
      en: 'Chemical Engineering',
      th: 'ภาควิชาวิศวกรรมเคมี',
      initial: DepartmentEnum.CHE,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการวิศวกรรมคอมพิวเตอร์: ชั้น 10 อาคารวิศววัฒนะ (S4)',
      workshop: 'จุดนัดลงทะเบียน workshop: ชั้น 11 อาคารวิศววัฒนะ (S4)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/ChemicalEngineeringKMUTT',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/chemical_engineering_KMUTT',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมเคมี ตั้งอยู่ที่ บริเวณลานใต้ตึกภาควิชาวิศวกรรมเคมี (S15) ชั้น 1 ณ ภาควิชาวิศกรรรมเคมี จะมีการแนะนำรายละเอียดต่าง ๆ เกี่ยวกับวิศวกรรมเคมีเพื่อให้น้อง ๆ ได้เรียนรู้เกี่ยวกับสาขาวิชาต่าง ๆ ในภาควิชาวิศวกรรมเคมีจากคำแนะนำของพี่ ๆ เพื่อให้น้อง ๆ ได้รับความรู้และเป็นแนวทางประกอบการตัดสินใจในการศึกษาต่อในระดับอุดมศึกษา นอกจากนี้น้อง ๆ ยังได้รับการแนะนำเรื่องการสอบเข้าและการเตรียม Portfolio ของภาควิชาวิศวกรรมเคมีจากรุ่นพี่  และ ยังมีผลงานที่น่าตื่นตาจากคณะอาจารย์กับรุ่นพี่ในภาควิชาเคมีอีกด้วย มาเข้าร่วมนิทรรศการเพื่อค้นพบโลกของวิศวกรรมเคมี',
      },
      {
        title: 'Workshop',
        description: 'Workshop จากภาควิชาวิศวกรรมเคมี ที่จะพาน้อง ๆ ไปสนุกกับกิจกรรมจากพี่ ๆ วิศวกรรมเคมี ดังนี้',
        subDescription: [
          {
            name: 'Workshop โปรแกรม Aspen',
            description:
              'ร่วมสัมผัสโลกของโปรแกรม Aspen ใน Workshop นี้ เราจะแนะนำการใช้งานโปรแกรม Aspen และให้คุณเปลี่ยนค่าและรันโปรแกรมพร้อมอธิบายตัวแปรต่าง ๆ อย่างชัดเจน ความรู้ที่คุณจะได้รับจาก Workshop นี้จะเป็นประโยชน์อย่างมากในวิชาชีพของคุณ!',
          },
          {
            name: 'Workshop ภาควิชาวิศวกรรมเคมี',
            description:
              'ค้นพบภาควิชาวิศวกรรมเคมีใน Workshop นี้ รับข้อมูลเกี่ยวกับหลักสูตรที่เราเสนอ โครงการ U-ChEPS และมีโอกาสถามตอบเพิ่มเติมเกี่ยวกับเรา นี่เป็นโอกาสดีในการเริ่มต้นการเรียนรู้วิศวกรรมเคมี!',
          },
          {
            name: 'Workshop เครื่องปฏิบัติงานของชาววิศวกรรมเคมี',
            description:
              'มาสัมผัสเครื่องปฏิบัติงานของชาววิศวกรรมเคมีใน Workshop นี้ เราจะสาธิตการใช้งานเครื่อง cooling tower และอธิบายการทำงานและความสำคัญของหน่วยงานนี้ให้คุณเข้าใจ และยังมีการสาธิตการใช้งานห้อง Multistage Continuous Distillation และ Pacled tower พร้อมอธิบายการทำงานและความสำคัญของหน่วยงานเหล่านี้ด้วย! มาเรียนรู้และเตรียมพร้อมกับเราเถอะ!',
          },
        ],
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/14/2023',
        time: '11.20 – 12.50',
        amount: 100,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 100,
      },
      {
        date: '10/14/2023',
        time: '15.00 - 16.30',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '11.20 – 12.50',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 100,
      },
      {
        date: '10/15/2023',
        time: '15.00 - 16.30',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '09.30 – 11.00',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '11.20 – 12.50',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 100,
      },
      {
        date: '10/16/2023',
        time: '15.00 - 16.30',
        amount: 100,
      },
    ],
  },
  {
    name: {
      en: 'Tool & Materials Engineering',
      th: 'ภาควิศวกรรมเครื่องมือและวัสดุ',
      initial: DepartmentEnum.TME,
    },
    image: Thumbnail,
    location: {
      exhibition: 'นิทรรศการ: ชั้น 1 และ ชั้น 2 อาคารวิศววัฒนะ (S4) ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 1  อาคารวิศววัฒนะ (S4) ',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/tme.kmutt/',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/tme_kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมเครื่องมือและวัสดุ ซึ่งจัดอาคารวิศววัฒนะ ชั้น 1 และ ชั้น 2 โดยน้อง ๆ จะได้ในการสำรวจและค้นพบโลกของวิศวกรรมเครื่องมือและวัสดุที่มีทักษะและเทคโนโลยีล้ำสมัย นอกจากนี้มีโอกาสในการติดต่อสอบถามเกี่ยวกับหลักสูตร โครงการวิจัย และโอกาสการเรียนรู้ในภาควิชา TME อย่างลึกซึ้งและน่าสนใจมากยิ่ง',
      },
      {
        title: 'Workshop',
        description: 'Workshop จากภาควิชาวิศวกรรมเครื่องมือและวัสดุ จะแบ่ง Workshop เป็น 2 แลป คือ',
        subDescription: [
          {
            name: 'กิจกรรมทำที่ตั้งโทรศัพท์จากแผ่นอลูมิเนียม',
            description:
              'กิจกรรมทำที่ตั้งโทรศัพท์จากแผ่นอลูมิเนียม เป็นกิจกรรมที่จัดขึ้นในห้องประลองของภาควิชาเครื่องมือและวัสดุ โดยกิจกรรมนี้เป็นโอกาสที่นักศึกษาและผู้เข้าร่วมสามารถเรียนรู้การใช้เครื่องมือและเครื่องจักรต่างๆ ในการประกอบโทรศัพท์จากแผ่นอลูมิเนียมได้อย่างแท้จริง',
          },
          {
            name: 'กิจกรรมเขียนแบบด้วยโปรแกรม Solidworks',
            description:
              'กิจกรรมนี้เป็นโอกาสที่ดีในการพัฒนาทักษะการใช้โปรแกรม SolidWorks ซึ่งเป็นเครื่องมือสำคัญในงานวิศวกรรมและการออกแบบ และผู้เข้าร่วมกิจกรรมจะได้รับความรู้และความเข้าใจที่จำเป็นในการสร้างแบบสามมิติอย่างมีความแม่นยำและประสิทธิภาพในอนาคต',
          },
        ],
      },
    ],
    subWorkshopSchedule: [
      {
        title: 'กิจกรรมทำที่ตั้งโทรศัพท์จากแผ่นอลูมิเนียม',
        schedules: [
          {
            date: '10/14/2023',
            time: '9.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '9.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '9.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
        ],
      },
      {
        title: 'กิจกรรมเขียนแบบด้วยโปรแกรม Solidworks',
        schedules: [
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
        ],
      },
    ],
  },
  {
    name: {
      en: 'Residential College',
      th: 'หลักสูตรพื้นที่การศึกษาราชบุรี',
      initial: DepartmentEnum.RC,
    },
    image: Thumbnail,
    location: {
      exhibition: 'ชั้น 1 อาคารเรียนรวม 4 (S12)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/RCKMUTT/',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/tme_kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'น้อง ๆ จะได้สัมผัสอีกหนึ่งบรรยากาศจากพี่ ๆ มจธ.ราชบุรี พบกับชีวิตการศึกษาแบบ Residential College ที่ราชบุรี หนึ่งเดียวในไทย ทั้งการเรียนการสอน การศึกษาต่อ พร้อมทั้งผลงานต่าง ๆ ที่สร้างคุณค่าต่อสังคมอีกด้วย นอกจากนี้ยังได้ฟังเรื่องราวดี ๆ พร้อมกิจกรรมร่วมสนุกและของที่ระลึกจากใจพี่ ๆ RC',
      },
    ],
    rc: [
      {
        department: 'วิศวกรรมเครื่องมือและวัสดุ (TME)',
        location: 'อาคารวิศววัฒนะ (ตึกแดง) ทางด้านฝั่งขวามือของบันไดใหญ่ (ทางด้านหอหญิง) ชั้น 1 และ ชั้น 2',
        details: [
          {
            title: 'ชั้น 1 อาคารวิศวะวัฒนะ',
            headDescription: 'รายละเอียดกิจกรรม :',
            description: [
              'บอร์ดแนะนำภาควิชาและหลักสูตร',
              'แนะนำ senior project',
              'จัดแสดงตัวอย่างอุปกรณ์หรือผลงานของแต่ละสาขา',
            ],
          },
          {
            title: 'ชั้น 2 อาคารวิศวะวัฒนะ',
            headDescription: 'จัดแสดงอุปกรณ์ต่างๆในภาควิชาดังนี้',
            description: [
              'บอร์ดแนะนำภาควิชาและหลักสูตร',
              'แนะนำ senior project',
              'จัดแสดงตัวอย่างอุปกรณ์หรือผลงานของแต่ละสาขา',
            ],
          },
        ],
      },
      {
        department: 'วิศวกรรมเครื่องมือและระบบควบคุม (INC)',
        location: 'อาคารเรียนรวม 4 (CB4) ชั้น 6',
        details: [
          {
            headDescription: 'รูปแบบกิจกรรม',
            description: [
              'แนะนําภาควิชา',
              'แนะนําหลักสูตร',
              'Robot Arm : จําลองการทํางานของ Robot Arm ในไลน์ผลิต สาธิตและอธิบายการทํางานของระบบเพื่อให้น้องเห็น',
              'ภาพการเรียนการสอนของภาควิชามากขึ้น',
              'ผลงานของรุ่นพี่และอาจารย์: งานวิจัย และโปรเจกต์ต่างๆ',
              'Q&A : Scan QR Code เพื่อถามคําถาม โดยจะมีจอโชว์คําถามที่น้องๆสงสัยและสอบถามเข้ามา (MC จะเป็นคนตอบ)',
            ],
          },
        ],
      },
      {
        department: 'วิศวกรรมเคมี (CHE)',
        location: 'บริเวณลานใต้ตึกภาควิชาวิศวกรรมเคมี ห้อง CHEEC ชั้น 1 ณ ภาควิชาวิศกรรรมเคมี',
        details: [
          {
            headDescription: 'รูปแบบกิจกรรม',
            description: [
              'แนะนำภาควิชา => วิศวะเคมีคืออะไร',
              'แนะนำสายอาชีพ => หลังเรียนจบ สามารถทำงานสายไหนได้บ้าง',
              'แนะนำวิธีสอบเข้า => รอบพอร์ตโฟลิโอ ทุนต่างๆ',
              'ผลงานของรุ่นพี่ => งานวิจัย โปรเจค',
              'ผลงานของอาจารย์',
              'บอร์ดผลงานของภาควิชา',
              'บริษัทที่เป็น connection กับภาควิชา',
            ],
          },
        ],
      },
    ],
  },
]
