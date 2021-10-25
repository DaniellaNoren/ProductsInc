using Microsoft.EntityFrameworkCore.Migrations;

namespace Products_Inc.Migrations
{
    public partial class orderproduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts");

            migrationBuilder.AddColumn<int>(
                name: "OrderProductId",
                table: "OrderProducts",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "Amount",
                table: "OrderProducts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts",
                column: "OrderProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_OrderId",
                table: "OrderProducts",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts");

            migrationBuilder.DropIndex(
                name: "IX_OrderProducts_OrderId",
                table: "OrderProducts");

            migrationBuilder.DropColumn(
                name: "OrderProductId",
                table: "OrderProducts");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "OrderProducts");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts",
                columns: new[] { "OrderId", "ProductId" });
        }
    }
}
