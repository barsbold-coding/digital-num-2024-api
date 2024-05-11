import { Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Staff',
})
export class Staff {
  @Column
  bagsh_ajiltny_khuviin_dugaar: string;

  @Column
  bagsh_ajiltny_ner: string;

  @Column
  bagsh_ajiltny_ovog: string;

  @Column
  khariyaalakh_buttsiin_negjiin_ner: string;

  @Column
  khariyaalakh_buttsiin_negjiin_dugaar: string;

  @Column
  alban_tushaal: string;

  @Column
  ezemshsen_bolovsrol: string;

  @Column
  tuluv: string;

  @Column
  imeil_khayag: string;

  @Column
  alban_uruunii_khayag: string;

  @Column
  dotuur_utas: string;
}
