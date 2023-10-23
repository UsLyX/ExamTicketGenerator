<template>
  <!-- Генерация билета. Вторая страница.-->
  <div class="tickets__generation__two">
    <div class="flex-size">
      <h1 class="title">Генерация билетов</h1>
      <button class="back__box" @click="sendData">
        <div class="back__img"></div>
        <h1 class="back__text">Назад</h1>
      </button>
      <h1 class="complete">Билеты успешно<br />сгенерированы</h1>
      <div class="complete__image"></div>
      <h1 class="choise__format">Скачать билеты</h1>
      <div class="document__box__image">
        <a href="#" @click="docxConverter" class="doc__img"></a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  WidthType,
  TextRun,
  AlignmentType,
  HeadingLevel,
  LevelFormat,
  PageBreak,
} from 'docx';
import { saveAs } from 'file-saver';
import axios from 'axios';
export default {
  name: 'ticketsGenerationTwo',
  props: {
    indexShablonGen: Number,
    amountGenTickets: Number,
  },
  data() {
    return {
      generateTickets: [],
    };
  },
  methods: {
    sendData() {
      this.$emit('sendData', 'ticketsGenerationOne');
    },
    amountsTickets(amount) {
      let tickets = [];
      for (let i = 0; i < amount; i++) {
        tickets.push(
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `ФГБОУ ВО ВГУИТ "Воронежский Государственный Университет Инженерных Технологий"`,
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `Цикловая комиссия ${this.generateTickets[i].cyclicСommission} факультет ${this.generateTickets[i].faculty}`,
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `Направление подготовки/специальность: ${this.generateTickets[i].speciality}`,
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${this.generateTickets[i].subjectName}`,
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `Билет №${i + 1}`,
                            allCaps: true,
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${this.generateTickets[i].questions[0]}`,
                          }),
                        ],
                        heading: HeadingLevel.HEADING_1,
                        numbering: {
                          reference: 'my-numbering',
                          level: 0,
                        },
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${this.generateTickets[i].questions[1]}`,
                          }),
                        ],
                        heading: HeadingLevel.HEADING_1,
                        numbering: {
                          reference: 'my-numbering',
                          level: 1,
                        },
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${this.generateTickets[i].questions[2]}`,
                          }),
                        ],
                        heading: HeadingLevel.HEADING_1,
                        numbering: {
                          reference: 'my-numbering',
                          indent: { left: 480 },
                          level: 2,
                        },
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${this.generateTickets[i].questions[3]}`,
                          }),
                        ],
                        heading: HeadingLevel.HEADING_1,
                        numbering: {
                          reference: 'my-numbering',
                          level: 3,
                        },
                      }),
                      new Paragraph({
                        children: [],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `Экзаменатор__${this.generateTickets[i].informAboutExaminer}         `,
                            size: '14pt',
                          }),
                          new TextRun({
                            text: `Председатель ЦК__${this.generateTickets[i].informAboutChairman}`,
                            size: '14pt',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                        heading: HeadingLevel.HEADING_1,
                      }),
                    ],
                  }),
                ],
              }),
            ],
            width: {
              size: 9000,
              type: WidthType.DXA,
            },
          }),
          new Paragraph({ text: '', children: [new PageBreak()] })
        );
      }
      return tickets;
    },
    docxConverter() {
      const document = new Document({
        styles: {
          default: {
            heading1: {
              run: {
                size: '16pt',
                bold: false,
                italics: false,
                color: '000000',
              },
              paragraph: {
                spacing: {
                  after: 120,
                  before: 120,
                },
              },
            },
          },
        },
        numbering: {
          config: [
            {
              reference: 'my-numbering',
              levels: [
                {
                  level: 0,
                  format: LevelFormat.DECIMAL,
                  text: '1.',
                  alignment: AlignmentType.START,
                  style: {
                    paragraph: {
                      indent: { left: 280 },
                    },
                  },
                },
                {
                  level: 1,
                  format: LevelFormat.DECIMAL,
                  text: '2.',
                  alignment: AlignmentType.START,
                  style: {
                    paragraph: {
                      indent: { left: 280 },
                    },
                  },
                },
                {
                  level: 2,
                  format: LevelFormat.DECIMAL,
                  text: '3.',
                  alignment: AlignmentType.START,
                  style: {
                    paragraph: {
                      indent: { left: 280 },
                    },
                  },
                },
                {
                  level: 3,
                  format: LevelFormat.DECIMAL,
                  text: '4.',
                  alignment: AlignmentType.START,
                  style: {
                    paragraph: {
                      indent: { left: 280 },
                    },
                  },
                },
              ],
            },
          ],
        },

        sections: [
          {
            children: [...this.amountsTickets(this.amountGenTickets)],
          },
        ],
      });
      Packer.toBlob(document).then((blob) => {
        saveAs(blob, 'Билеты.docx');
      });
    },
  },
  async created() {
    console.log('Индекс Шаблона: ' + this.indexShablonGen, 'Количество генерируемых билетов: ' + this.amountGenTickets);
    const data = {
      jwt: localStorage.getItem('jwt'),
      index: this.indexShablonGen,
    };
    for (let i = 0; i < this.amountGenTickets; i++) {
      await axios
        .post('http://localhost:8081/tickets/ticket/generation', data)
        .then((res) => {
          this.generateTickets.push(res.data);
          if (
            res.data.allQuestions.teoreticalQuestions.length === 0 ||
            res.data.allQuestions.practicalQuestions.length === 0
          ) {
            this.$emit('sendData', 'ticketsGenerationError');
          }
        })
        .catch((err) => console.log(err));
    }
  },
};
</script>

<style scoped src="@/css/addingData/ticket-generation/ticketsGenerationTwo.css"></style>
