using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Products_Inc.Migrations
{
    public partial class newDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(nullable: true),
                    ProductDescription = table.Column<string>(nullable: true),
                    ProductPrice = table.Column<int>(nullable: false),
                    ImgPath = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Orders_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ShoppingCarts",
                columns: table => new
                {
                    ShoppingCartId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    TransactionComplete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingCarts", x => x.ShoppingCartId);
                    table.ForeignKey(
                        name: "FK_ShoppingCarts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderProducts",
                columns: table => new
                {
                    OrderProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    ProductId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderProducts", x => x.OrderProductId);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Products_ProductId1",
                        column: x => x.ProductId1,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ShoppingCartProducts",
                columns: table => new
                {
                    ShoppingCartProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShoppingCartId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    Amount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingCartProducts", x => x.ShoppingCartProductId);
                    table.ForeignKey(
                        name: "FK_ShoppingCartProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShoppingCartProducts_ShoppingCarts_ShoppingCartId",
                        column: x => x.ShoppingCartId,
                        principalTable: "ShoppingCarts",
                        principalColumn: "ShoppingCartId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "438db5c8-0513-43a0-a84c-cd416c4e3a54", "c51e2a4d-2347-441d-8965-5f691c11452e", "Admin", "ADMIN" },
                    { "0948bea6-fb82-49c9-8cd8-fec213fe8e8a", "89aa02cd-71f6-4fa3-8af3-d54a20c2ece0", "User", "USER" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "93007542-342f-404e-9836-1804adcf0bec", 0, "137a610d-04ef-4ccb-88d1-b8750d44e0d3", "customer1@email.com", false, false, null, "CUSTOMER1@EMAIL.COM", "CUSTOMER1", "AQAAAAEAACcQAAAAEJYiYPkUtNurR2QJBuqzCI7AvOq7n+b1H6ieEW6yZv/Cifp4itxIe/Rwsf6jYjKGtw==", null, false, "d66fd5a4-a745-490a-ae5c-f6c4a08432d9", false, "customer1" },
                    { "b7b7e35b-2ea3-4559-a30c-4c75a4651d97", 0, "5cd5b655-6654-45ae-982b-4d6c41db40b0", "customer1@email.com", false, false, null, "CUSTOMER1@EMAIL.COM", "ADMIN", "AQAAAAEAACcQAAAAEN7W+bmjKmwHApZBNfr2CUqFILm55kJj1UMOEgVFNRAiBK3mYViPJqiSen0sjM0zkw==", null, false, "cd5581a9-ae58-4c42-b563-deb483b357b8", false, "Admin" },
                    { "a30df12b-02b2-476e-a476-9d3355c33887", 0, "9b3cbb8c-4161-4bd6-9062-be3c0f7dfd95", "customer2@email.com", false, false, null, "CUSTOMER2@EMAIL.COM", "CUSTOMER2", "AQAAAAEAACcQAAAAEBfim/LwznywwvkddwrOL/bRtlSWcexaW25jFIkzuyZkgicSYoDpDpOPB3OD7HOf8Q==", null, false, "e81f3273-f3c3-471b-b1dd-7ca8c4c20773", false, "customer2" },
                    { "c19797b5-6c26-47e0-928b-a772100db657", 0, "5ac52686-12d9-43ea-9d1d-2ced6ae99dcb", "customer3@email.com", false, false, null, "CUSTOMER3@EMAIL.COM", "CUSTOMER3", "AQAAAAEAACcQAAAAEAagAO78MMpn5nWcNP0SY3b4U9UIkC5xQtCrlTPcDDSugj17fhYMAo+4DMRCEd+pSA==", null, false, "d24cfbf1-9348-4df4-bc76-9e6a55d0c7a5", false, "customer3" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "ImgPath", "ProductDescription", "ProductName", "ProductPrice" },
                values: new object[,]
                {
                    { 50, "./img/img4.jpg", "Nice for your health", "Orange", 30 },
                    { 51, "./img/img6.jpg", "Good to drink", "Coca Cola", 16 },
                    { 30, "./img/img11.jpg", "Sweet tomatos.", "Tomatos A-Class", 3 },
                    { 53, "./img/img8.jpg", "Healthy breakfast", "Corn Flakes", 25 },
                    { 54, "./img/img9.jpg", "Nice to make food", "Salt", 9 },
                    { 55, "./img/img12.jpg", "Good for health", "Avocado", 18 },
                    { 56, "./img/img14.jpg", "Nice to eat", "Eggo", 30 },
                    { 57, "./img/img16.jpg", "Creamy sun butter", "SunButter", 35 },
                    { 20, "./img/img2.jpg", "A good fruit.", "Pomegranete", 6 },
                    { 10, "./img/img1.png", "A nice eko quality bananas from peru.", "Bananas", 34 },
                    { 40, "./img/img16.png", "Butter made of sunflower seeds.", "Sunflower Butter", 54 },
                    { 52, "./img/img7.jpg", "Good for health", "Oreo", 10 }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[,]
                {
                    { "b7b7e35b-2ea3-4559-a30c-4c75a4651d97", "438db5c8-0513-43a0-a84c-cd416c4e3a54" },
                    { "b7b7e35b-2ea3-4559-a30c-4c75a4651d97", "0948bea6-fb82-49c9-8cd8-fec213fe8e8a" },
                    { "93007542-342f-404e-9836-1804adcf0bec", "0948bea6-fb82-49c9-8cd8-fec213fe8e8a" },
                    { "a30df12b-02b2-476e-a476-9d3355c33887", "0948bea6-fb82-49c9-8cd8-fec213fe8e8a" },
                    { "c19797b5-6c26-47e0-928b-a772100db657", "0948bea6-fb82-49c9-8cd8-fec213fe8e8a" }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "OrderId", "UserId" },
                values: new object[,]
                {
                    { 2, "93007542-342f-404e-9836-1804adcf0bec" },
                    { 3, "a30df12b-02b2-476e-a476-9d3355c33887" },
                    { 4, "a30df12b-02b2-476e-a476-9d3355c33887" },
                    { 1, "c19797b5-6c26-47e0-928b-a772100db657" }
                });

            migrationBuilder.InsertData(
                table: "OrderProducts",
                columns: new[] { "OrderProductId", "Amount", "OrderId", "ProductId", "ProductId1" },
                values: new object[,]
                {
                    { 4, 6, 2, 52, null },
                    { 5, 1, 2, 54, null },
                    { 6, 2, 2, 56, null },
                    { 7, 9, 3, 55, null },
                    { 8, 1, 3, 57, null },
                    { 9, 3, 3, 51, null },
                    { 10, 5, 4, 52, null },
                    { 11, 3, 4, 53, null },
                    { 12, 1, 4, 55, null },
                    { 1, 4, 1, 50, null },
                    { 2, 2, 1, 52, null },
                    { 3, 1, 1, 57, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_OrderId",
                table: "OrderProducts",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_ProductId",
                table: "OrderProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_ProductId1",
                table: "OrderProducts",
                column: "ProductId1");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCartProducts_ProductId",
                table: "ShoppingCartProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCartProducts_ShoppingCartId",
                table: "ShoppingCartProducts",
                column: "ShoppingCartId");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingCarts_UserId",
                table: "ShoppingCarts",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "OrderProducts");

            migrationBuilder.DropTable(
                name: "ShoppingCartProducts");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "ShoppingCarts");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
