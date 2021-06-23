import {MigrationInterface, QueryRunner, Table} from "typeorm";

// o número presente na classe é o timestamp (momenmto de criação) da criação da entidade
// up = criar tabela
// down = remover tabela
export class CreateUsers1624395295491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "uuid", // id única e universal com 32 dígitos
          isPrimary: true, // (PK = true)
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "admin",
          type: "boolean",
          default: false, // na falta de info, admin será false
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()", // function
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()", // function
        },
      ],
    })
  );
}   

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
