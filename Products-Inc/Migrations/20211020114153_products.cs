using Microsoft.EntityFrameworkCore.Migrations;

namespace Products_Inc.Migrations
{
    public partial class products : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Orders_OrderId1",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_OrderId1",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderId1",
                table: "Orders");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderId1",
                table: "Orders",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderId1",
                table: "Orders",
                column: "OrderId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Orders_OrderId1",
                table: "Orders",
                column: "OrderId1",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
