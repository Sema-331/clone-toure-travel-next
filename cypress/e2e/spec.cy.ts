describe("template spec", () => {
  before("before all tests", () => {
    cy.log("tests started");
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("find fly", () => {
    cy.get("a").contains("Find Flight").click();
    cy.location("pathname").should("equal", "/FindFly");
  });
  it("find hotel", () => {
    cy.get("a").contains("Find Hotel").click();
    cy.location("pathname").should("equal", "/FindHotel");
  });
  it("test form from main page", () => {
    cy.get(".search__label-ff > .css-b62m3t-container > .css-13cymwt-control")
      .scrollIntoView()
      .should("be.visible")
      .type("Lahore{enter}");
    // cy.get(
    //   ".search__label-ff > .css-b62m3t-container > .css-13cymwt-control"
    // ).type("Lahore");
    cy.get(
      ".search__label-f > .css-b62m3t-container > .css-13cymwt-control"
    ).type("Lahore{enter}");
    cy.get(
      ".search__label-t > .react-datepicker-wrapper > .react-datepicker__input-container > .date__select"
    ).click();
    cy.get(":nth-child(5) > .react-datepicker__day--027").click();
    cy.get(
      ".search__label-s > .react-datepicker-wrapper > .react-datepicker__input-container > .date__select"
    ).click();
    cy.get(":nth-child(6) > .react-datepicker__day--005").click();
    cy.get(
      ".search__label-fo > .css-b62m3t-container > .css-13cymwt-control"
    ).type("1 Passenger, Economy{enter}");
    cy.get('button[type="submit"]')
      .should("have.class", "search__btn-show-variants")
      .click();
    cy.location("pathname").should("equal", "/FindFly/FlightList_result");

    cy.location("search").should(
      "equal",
      "?name_airport_from=Lahore&name_airport_to=Lahore&type=Econom&date_from=2024/06/27"
    );
    // cy.get("div")
    //   .should("have.class", " css-13cymwt-control")
    //   .scrollIntoView()
    //   .click();
  });
  it("test7", () => {
    cy.visit("http://localhost:3000/Login");
    cy.get('input[placeholder="Email"]').type("svelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
    cy.visit(
      "http://localhost:3000/FindFly/FlightList_result?name_airport_from=Lahore&name_airport_to=Lahore&type=Econom&date_from=2024/06/27"
    );

    cy.get('div[data-testid="1"]').should("be.visible");
    cy.contains("Show more results").scrollIntoView().click();
    cy.get('div[data-testid="2"]').should("be.visible");
    // cy.get('div[data-testid="2"]').should("not.be.visible");
    // cy.contains("Show more results")
    cy.get('a[data-testid="btn_show_more-1"]').click();
    cy.location("pathname").should("equal", "/FindFly/FlightList_result/1");
    cy.location("search").should("equal", "?type_class=Econom");
    // cy.wait(10000);
    cy.get('input[data-testid="input_checkbox2"]').click();
    cy.get('button[type="submit"]')
      .should("have.class", "view__btn-search-checkboxes")
      .click();
    cy.location("search").should("equal", "?type_class=Econom,First%20Class");
    cy.get('div[data-testid="ticket-3"]').should("be.visible");
    cy.get('div[data-testid="ticket-4"]').should("be.visible");
    cy.wait(3000);
    cy.get('div[data-testid="ticket-3"]').click();
    cy.location("pathname").should("equal", "/FindFly/FlightList_result/1/3");
    cy.get('label[data-testid="credit-card-26"]').scrollIntoView().click();
    cy.get(".card-active__btn-pay-success").click();
    cy.wait(3000);
    cy.location("pathname").should(
      "equal",
      "/FindFly/FlightList_result/1/3/booking_ticket"
    );
  });
  it("test login user", () => {
    cy.visit("http://localhost:3000/Login");
    cy.get('input[placeholder="Email"]').type("svelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
  });
  it("test sign in and register", () => {
    cy.visit("http://localhost:3000/SignUp");
    cy.get('input[placeholder="John"]').type("Hello");
    cy.get('input[placeholder="Mackflayer"]').type("World");
    cy.get('input[type="email"]').type("semavelesik@inbox.ru");
    cy.get('input[placeholder="+7 927 308 23 56"]').type("+79273082356");
    cy.get('input[placeholder="Enter the password"]').type("helo");
    cy.get('input[placeholder="Confirm your password"]').type("helo");
    cy.get('input[type="checkbox"]').check();
    cy.contains("Create account").click();
    cy.wait(3500);
    cy.location("pathname").should("equal", "/Login");
    cy.get('input[placeholder="Email"]').type("semavelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
  });
  it("detailed test modal geo", () => {
    cy.get(".head__name-selected-city").should("not.equal", "г. Уфа");
    cy.get('button[data-testid="openModal"]').click();
    cy.get("div").should("have.class", "head__block-modal-search-city");
    cy.get('input[placeholder="Start searching"]').type("уфа");
    cy.wait(1500);
    cy.get("li[data-testid=list-item-cities-0]").click();
    cy.get(".head__name-selected-city").should("have.text", "г. Уфа");
  });
  it("test form and products hotels", () => {
    cy.viewport(1400, 1077);
    cy.visit("http://localhost:3000/Login");
    cy.get('input[placeholder="Email"]').type("svelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
    cy.visit("http://localhost:3000/");
    cy.get(".search__block-stays").click();
    cy.wait(1000);
    cy.get(".search__input-ff").type("Istanbul, Turkey{enter}");
    cy.get(
      ".search__label-s > .react-datepicker-wrapper > .react-datepicker__input-container > .date__select"
    ).click();
    cy.get(":nth-child(5) > .react-datepicker__day--028").click();
    cy.get(
      ".search__label-t > .react-datepicker-wrapper > .react-datepicker__input-container > .date__select"
    ).click();
    cy.get(":nth-child(6) > .react-datepicker__day--005").click();
    cy.get(".css-13cymwt-control").type("1 double bed or 2 twin beds{enter}");
    cy.get(".search__btn-show-variants").click();
    cy.wait(2500);
    cy.location("pathname").should("equal", "/FindHotel/ResultsHotels");
    cy.location("search").should(
      "equal",
      "?search=Istanbul,%20Turkey&date_from_hotel=2024/06/28&date_check_out=2024/07/05&type_room=1%20double%20bed%20or%202%20twin%20beds&variaty=Hotels"
    );
    cy.get('button[data-testid="btn-show-more"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get('a[data-testid="test-view-details-hotel-3"]').should("be.visible");
    cy.get('a[data-testid="test-view-details-hotel-2"]').click();
    cy.location("pathname").should("equal", "/FindHotel/ResultsHotels/2");
    cy.get(".location__block-list-box > :nth-child(12)").should("not.exist");
    cy.get(".location__more-amenitites-count")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".location__block-list-box > :nth-child(12)").should("be.visible");
    cy.get('.single-hotel__block-full-images > [alt="image_gallery"]').should(
      "not.exist"
    );
    cy.get(
      '.single-hotel__block-full-images > [alt="image_gallery image_gallery"]'
    ).should("not.exist");
    cy.get(".single-hotel__btn-imteractive").click();
    cy.get('.single-hotel__block-full-images > [alt="image_gallery"]').should(
      "exist"
    );
    cy.get(
      '.single-hotel__block-full-images > [alt="image_gallery image_gallery"]'
    ).should("exist");
    cy.get(".location__more-amenitites-count")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".location__block-list-box > :nth-child(12)").should("not.exist");
    cy.get(".comment__block-main-need-sign-in-inside").should("not.exist");
    cy.get(".comment__block-modal-add-review").should("not.exist");
    cy.get(".comment__btn-add-your-review").click();
    // cy.get(".comment__block-main-need-sign-in-inside").should("exist");
    cy.get(".comment__block-modal-add-review").should("exist");
    cy.get(".comment__close-modal-icon").click();
    // cy.get(".comment__icon-close-modal").click(); with not register users
    // cy.get(".comment__block-main-need-sign-in-inside").should("not.exist");
    cy.get(
      ":nth-child(2) > .alls__block-more-info-detailed > .alls__btn-detailed-info"
    ).click();
    cy.wait(2000);
    cy.location("pathname").should("equal", "/FindHotel/ResultsHotels/2/6");
    cy.wait(1500);
    cy.get(".book__more-info")
      .scrollIntoView()
      .should("be.visible")
      .trigger("mouseover");
    cy.get(".adds__block-add-new-card")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".create__block-main").should("be.visible");
    cy.get("#card-number").type("4044156099403678");
    cy.get(".create__block-uu-fields > .create__input-field").type("11");
    cy.get(".create__input-field-second").type("26");
    cy.get(".create__block-field-cvc > .create__input-field").type("669");
    cy.get(":nth-child(3) > .create__input-field").type("semen velesik");
    cy.get(".css-13cymwt-control").click().type("Russia{enter}");
    cy.get(".create__input-agree").check();
    cy.get(".create__btn-add-card").click();
    cy.get('[data-testid="credit-card-27"]').click();
    cy.get(".card-active__btn-pay-success").click();
    cy.location("pathname").should(
      "equal",
      "/FindHotel/ResultsHotels/2/6/booking_room_hotel"
    );
  });
  it("add favourites ticket and check favourites & delete", () => {
    cy.viewport(1400, 1077);
    cy.visit("http://localhost:3000/Login");
    cy.get('input[placeholder="Email"]').type("svelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
    cy.visit(
      "http://localhost:3000/FindFly/FlightList_result?name_airport_from=Lahore&name_airport_to=Lahore&type=Econom&date_from=2024/05/05"
    );
    cy.get('div[data-testid="test-31"]').should("not.exist");
    cy.get(".fly-res__favourites-btn")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.visit("http://localhost:3000/Favourites");
    cy.wait(2000);
    cy.get('div[data-testid="test-31"]').should("exist");
    cy.get(".favourites__type-hotel").click();
    cy.get(".favourites__type-flyght").click();
    cy.get(".fly-res__btn-view-detailed").click();
    cy.location("pathname").should("equal", "/FindFly/FlightList_result/1");
    // cy.location('search').should('equal', '1')
  });
  it("test add credit card", () => {
    cy.viewport(1400, 1277);
    cy.visit("http://localhost:3000/Login");
    cy.get('input[placeholder="Email"]').type("svelesik@inbox.ru");
    cy.get("input[placeholder='Type your password...']").type("helo");
    cy.get('button[type="submit"]')
      .should("have.class", "login__btn-submit")
      .click();
    cy.wait(4000);
    cy.location("pathname").should("equal", "/FindFly");
    cy.get(".header-fly__block-main-modal").should("not.exist");
    cy.get(".change-comp__user-block").click();
    cy.get(".header-fly__block-main-modal").should("exist");
    cy.get(".header-fly__block-params > :nth-child(1)").trigger("mouseover");
    // cy.get(".header-fly__block-single-option > :nth-childe(1)").click();
    cy.visit("http://localhost:3000/Account/Payment_method");
    cy.location("pathname").should("equal", "/Account/Payment_method");
    cy.get(".card-active__block-interactive-cards")
      .scrollIntoView()
      .should("be.visible");
    cy.get(".create__block-main").should("not.exist");
    cy.get(".cgc").click();
    cy.get(".create__block-main").should("exist");
    cy.get("#card-number").type("4044156099403678");
    cy.get(".create__block-uu-fields > .create__input-field").type("11");
    cy.get(".create__input-field-second").type("26");
    cy.get(".create__block-field-cvc > .create__input-field").type("669");
    cy.get(":nth-child(3) > .create__input-field").type("semen velesik");
    cy.get(".css-13cymwt-control").click().type("Russia{enter}");
    cy.get(".create__input-agree").check();
    cy.get(".create__btn-add-card").click();
    // cy.get('[data-testid="credit-card-27"]').click();
    cy.get('div[data-testid="data-testid-card-30"]').should("exist");
    cy.get('button[data-testid="data-testid-btn-delete-30"]').click();
    cy.get('div[data-testid="data-testid-card-30"]').should("not.exist");
  });
  it.only("test hover card component", () => {
    cy.visit("http://localhost:3000/FindHotel");
    cy.get(":nth-child(1) > .tender__list-box-item-front")
      .scrollIntoView()
      .should("be.visible")
      .trigger("mouseover");
    // cy.get(
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat. > :nth-child(1)"
    // ).should("exist");
  });
  after("end test", () => {
    cy.log("tests end");
  });
});
