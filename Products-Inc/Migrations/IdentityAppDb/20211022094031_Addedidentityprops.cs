using Microsoft.EntityFrameworkCore.Migrations;

namespace Products_Inc.Migrations.IdentityAppDb
{
    public partial class Addedidentityprops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BirthDate",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0948bea6-fb82-49c9-8cd8-fec213fe8e8a",
                column: "ConcurrencyStamp",
                value: "a41c411b-8cde-4548-98cf-42f9b2bc6aa7");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "438db5c8-0513-43a0-a84c-cd416c4e3a54",
                column: "ConcurrencyStamp",
                value: "62f313e1-8e7d-4148-9bd0-16b5c8a59369");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0948bea6-fb82-49c9-8cd8-fec213fe8e8a",
                column: "ConcurrencyStamp",
                value: "824c0113-d293-42b2-afcc-f2abc0cf4158");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "438db5c8-0513-43a0-a84c-cd416c4e3a54",
                column: "ConcurrencyStamp",
                value: "7fc178e3-d832-4dec-b689-a7f0c8ccfce4");
        }
    }
}
