using Microsoft.EntityFrameworkCore.Migrations;

namespace Products_Inc.Migrations
{
    public partial class Changedproductseeds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 40);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0948bea6-fb82-49c9-8cd8-fec213fe8e8a",
                column: "ConcurrencyStamp",
                value: "350ca24c-9826-4e09-a3d7-23fa7995e7cc");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "438db5c8-0513-43a0-a84c-cd416c4e3a54",
                column: "ConcurrencyStamp",
                value: "9ada17b7-6eb0-439b-a7a9-4ef04ec25f53");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "90b56ba5-f8dd-4860-8638-167b126a8454", "AQAAAAEAACcQAAAAECJHHob0Z9EQRL4YP6OP6/LHkbLSb1SN3YL9tQJl5yLmyl/19eBE68WRmiFMYA6+UA==", "33b338bf-fbfe-437d-bba2-a9febe36c405" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "71af795e-d415-4165-b8ab-241ce8ee5650", "AQAAAAEAACcQAAAAEDavUcXp2NR80W1tCnOG4KruClh2xuBlfm/IAuauvaG6+pWGMcRo5jnR+uMDJnp+9w==", "bb954d43-7ab3-4d41-842e-a58f8d382d0c" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "20",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1de6bca1-51e9-4ff3-bbce-2e37e475c4f3", "AQAAAAEAACcQAAAAELHIfGDgoe335rRblGcnXaqEuHerg0qU8fwMBjUIXWAiRxRR+o/nkbLwC6paF86JiQ==", "d9464794-7544-4046-ad3d-68220c4fb542" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "30",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "301a9815-2c55-44ce-9750-f824026f74da", "AQAAAAEAACcQAAAAEIaiEgGhIHHLH0X6jP7GXejxQZlG9q+SRQUgLXsL9pqWbf8lsAU6y4ixheLPeb2BRA==", "a313ed5e-7aed-4157-a8b5-af5fd93adc0e" });

            migrationBuilder.InsertData(
                table: "OrderProducts",
                columns: new[] { "OrderProductId", "Amount", "OrderId", "ProductId" },
                values: new object[,]
                {
                    { 3, 1, 1, 57 },
                    { 4, 6, 2, 52 },
                    { 5, 1, 2, 54 },
                    { 6, 2, 2, 56 },
                    { 8, 1, 3, 57 },
                    { 9, 3, 3, 51 },
                    { 10, 5, 4, 52 },
                    { 11, 3, 4, 53 },
                    { 12, 1, 4, 55 },
                    { 1, 4, 1, 50 },
                    { 7, 9, 3, 55 },
                    { 2, 2, 1, 52 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0948bea6-fb82-49c9-8cd8-fec213fe8e8a",
                column: "ConcurrencyStamp",
                value: "4db61945-6c94-422b-b618-957ba8d9043a");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "438db5c8-0513-43a0-a84c-cd416c4e3a54",
                column: "ConcurrencyStamp",
                value: "399450f3-635d-46b2-bf24-d4710ba649b6");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "119bf77e-e3bf-43a2-b166-e9d4955dea41", "AQAAAAEAACcQAAAAELgJGXIZQ/jepIURy3raSGegCUo1dkjJeJY0w4OVXP9710GrqBCIGwIAOAaRZ2bU7w==", "bdfe3566-5778-4613-b523-79b39b3a9bc3" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "132bbe5d-0d82-4e23-9129-3df477a71cfd", "AQAAAAEAACcQAAAAEK/lt8NXkSBTKaoXO0C4mzSN1EYJaW1vyc1TobqEyfyhIB0NPf5TgOO6jxsVUeeRTw==", "f80fdaf0-5562-44e1-8506-c70304e3ba7d" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "20",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7c4a8d8f-864f-4163-9be3-d73dc42eff80", "AQAAAAEAACcQAAAAECj2SZISMU1Ip7P6mqlEpX1B0cmF+9l4ZFoTgan5z23jW6OMEljf1D+oacadpL7axA==", "0dfa0e50-6358-4bda-8d5e-ab5a4bd84613" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "30",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "78876eb8-dab8-493f-95a4-2547b9827a84", "AQAAAAEAACcQAAAAEMK/QRIYySp0oyPWtkGhte2/p1/JGV67JyCwR2sz6FzhlIRKoVcP/HVuwscFctau2A==", "d65bf29a-5783-4278-b7d6-af2014ad2193" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "ImgPath", "ProductDescription", "ProductName", "ProductPrice" },
                values: new object[,]
                {
                    { 10, null, "A nice eko quality bananas from peru.", "Pack of bananas", 34 },
                    { 20, null, "Clementine fruit.", "Satsumas", 6 },
                    { 30, null, "Sweet tomatos.", "Tomatos A-Class", 3 },
                    { 40, null, "Butter made of sunflower seeds.", "Sunflower Butter", 54 }
                });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 1,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 10 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 2,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 10 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 3,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 30 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 4,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 1, 40 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 5,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 1, 30 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 6,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 1, 20 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 7,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 20 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 8,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 30 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 9,
                columns: new[] { "Amount", "ProductId" },
                values: new object[] { 0, 10 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 10,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 3, 10 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 11,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 3, 20 });

            migrationBuilder.UpdateData(
                table: "OrderProducts",
                keyColumn: "OrderProductId",
                keyValue: 12,
                columns: new[] { "Amount", "OrderId", "ProductId" },
                values: new object[] { 0, 3, 30 });
        }
    }
}
