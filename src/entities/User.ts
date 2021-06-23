import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
// v4 = versão que transforma o id em 32 números aleatórios
import { v4 as uuid } from "uuid"; 

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // instanciar User - criar uma operação dentro da criação
  // caso o id seja nulo, undefined ou não exista, 
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
