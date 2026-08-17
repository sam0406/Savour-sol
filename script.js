const menu = [
  {
    category: "Starters",
    items: [
      ["Molten Lava Cheese Bomb", "Crispy shell bursting with gooey, rich melted cheese inside.", "449.00"],
      [
        "The Chimichanga Crunch",
        "(Spicy Chicken / Truffle Mushroom / Veg Fiesta) Golden deep-fried tortilla stuffed with savoury mushroom, veggie or chicken filling.",
        "549.00 / 649.00",
      ],
      ["Habanero Chicken Bites", "Juicy chicken ignited with smoky habanero chilli and bold spices.", "549.00"],
      ["Nacho Royale", "Towering crispy nachos crowned with salsas, cheese and fresh toppings.", "499.00"],
      ["Wood Fired Garlic Bread", "Artisan bread kissed by woodfire, slathered in roasted garlic butter.", "399.00"],
    ],
  },
  {
    category: "Sharing Plates",
    items: [
      ["Spiced Lamb Kebab Bites", "Tender slow-spiced minced lamb skewers with smoky, aromatic char.", "649.00"],
      ["Garden Lasagna Bites", "Bite-sized lasagna layered with earthy mushroom, corn and fresh spinach.", "599.00"],
      [
        "Wood fired bread sandwich",
        "(Chicken Parmigiana / Truffle Mushroom and Mac) Fresh Woodfired Bread stuffed with choice of filling .",
        "549.00 / 649.00",
      ],
      [
        "Crispy Tostada",
        "(Chicken / Truffle Mushroom / Veg Fiesta) Crunchy tostada piled with vibrant toppings and zesty lime crema.",
        "499.00 / 449.00 ",
      ],
    ],
  },

  {
    category: "Fries",
    items: [
      ["Classic Salted Fries", "Classic crispy thick cut salted fries", "349.00"],
      ["Peri Peri Fries", "Thick cut fries tossed in house made peri peri served with cheesey dip", "399.00"],
      ["Truffle Parmesan Fries", "BThick cut fries tossed in in house cheese seasoning and truffle oil opeed off with parmesan.", "449.00"],
      
    ],
  },
  
  {
    category: "Taco Bar",
    items: [
      ["Smoky Asado Taco (Chicken)", "Char-grilled marinated chicken with smoky asado spices and fresh pico.", "549.00"],
      ["Smoky Asado Taco (Mushroom)", "Flame-kissed mushrooms in asado marinade with salsa verde and cream.", "549.00"],
      ["Pacific Fish Taco", "Beer-battered golden fish with slaw, chipotle mayo and fresh lime.", "599.00"],
      ["Birria Dip Taco (Lamb)", "Slow-braised lamb birria taco served with rich consommé for dipping.", "649.00"],
      ["Baja Prawn Taco", "Plump prawns with Baja spice, tangy slaw and zesty citrus drizzle.", "649.00"],
    ],
  },
  {
    category: "Dippable Sliders",
    items: [
      ["Black Bean Sliders", "Hearty spiced black bean patty with avocado crema and pickled jalapeño.", "499.00"],
      ["Black Truffle Mushroom Sliders", "Earthy mushroom patty drizzled with luxurious black truffle aioli.", "549.00"],
      ["Street-Smash Chicken Sliders", "Crispy smashed chicken patty with pickles and signature house sauce.", "549.00"],
      ["Habanero Chicken Sliders", "Buttermilk-fried crispy chicken with honey sriracha and cool coleslaw.", "549.00"],
      ["Birria Melt Sliders (Mutton)", "Slow-cooked birria mutton piled high in a butter-toasted brioche bun.", "649.00"],
     
    ],
  },
  {
    category: "Mac & Cheese Bar",
    items: [
      ["Four Cheese Indulgence Mac", "Creamy blend of four melted Italian cheeses in silky pasta perfection.", "549.00"],
      ["Hot Mushroom Mac", "Sautéed mushrooms and sliced jalapeños in a bold, spicy cheese sauce.", "599.00"],
      ["Blaze Mac (Chicken)", "Fiery habanero-spiced chicken folded into ultra-creamy cheese mac.", "599.00"],
      ["Pizza Mac Mashup", "Cheesy mac meets pepperoni/Garden fresh vegetables , tomato sauce with oregano and marinara swirl.", "549.00 / 599.00"],
      ["Birria Mac (Lamb)", "Rich braised birria lamb stirred through velvety three-cheese macaroni.", "649.00"],
    ],
  },
  {
    category: "Large Plates",
    items: [
      ["Adobo Soul Bowl", "Tender adobo-marinated chicken on fragrant cilantro lime rice.", "699.00"],
      ["Fish-N-Chips", "Beer-battered fresh fish with golden hand-cut chips and tartare sauce.", "699.00"],
      ["Chicken Lasagna", "Pan-seared chicken breast simmered in rich tomato sauced layered with cheese.", "749.00"],
      ["Golden Parmi (Chicken)", "Pan-fried chicken breast in rich tomato sauce, topped with bubbling mozzarella.", "799.00"],
      ["Chicken Stroganoff", "Tender chicken strips in rich sour cream, paprika and mushroom sauce.", "649.00"],
      ["Forest Stroganoff", "Wild mushrooms simmered in velvety sour cream and smoked paprika sauce.", "599.00"],
      ["Eggplant Parmigiana", "Slow-roasted eggplant and cottage cheese layered with tomato ragù and golden melted cheese.", "549.00"],
      ["Truffle Cloud Gnocchi", "Pillowy potato gnocchi bathed in truffle cream with sautéed wild mushrooms.", "599.00"],
      ["Pollo Asada", "Citrus-marinated grilled chicken with charred asada spice and chimichurri.", "699.00"],
      ["Carne Asada", "Bold grilled mutton in tangy asada marinade with smoky chimichurri sauce.", "799.00"],
    ],
  },
  {
    category: "Pasta",
    items: [
      [
        "Creamy Alfredo Pasta",
        "(Chicken / Veg) Pasta in a rich Parmesan cream sauce with your choice of vegetables or chicken.",
        "599.00 / 549.00",
      ],
      ["Fiery Arrabbiata", "(Chicken / Veg) Spiced chicken, roasted peppers and chilli flakes on tangy tomato base.", "599.00 /549.00 "],
      ["Rosé Cream Pasta", "(Chicken / Veg) Pasta in a creamy tomato sauce with your choice of vegetables or chicken.", "599.00 / 549.00"],
    ],
  },
  
  {
    category: "Pizza",
    items: [
      ["La Bella Margherita", "Classic San Marzano tomato, fresh mozzarella and fragrant basil on crisp base.", "549.00"],
      ["Garden Bloom Pizza", "Seasonal garden vegetables with herb pesto and creamy white sauce base.", "599.00"],
      ["Hot Bird Pizza", "Spiced chicken, roasted peppers and chilli flakes on tangy tomato base.", "599.00"],
      ["The Pepperoni Royale", "Double-loaded pepperoni, jalapenos  with stretchy mozzarella on sourdough base.", "649.00"],
    ],
  },
  {
    category: "Quesadillas",
    items: [
      ["Garden Melt Quesadilla", "Colourful seasonal veggies and melted cheese in a toasted flour tortilla.", "499.00"],
      ["Black Truffle Melt", "Wild mushrooms and truffle oil sealed in a golden, cheese-filled quesadilla.", "549.00"],
      ["Creamy Dreamy Chicken Melt", "Shredded chicken in herby cream cheese, grilled to golden perfection.", "599.00"],
      ["Paprika Bliss Quesadilla", "Smoky paprika chicken with peppers and melted cheese in a crisp wrap.", "599.00"],
    ],
  },
  {
    category: "Burrito Bowl",
    items: [
      ["Earthy Harvest Bowl", "Seasoned mushrooms with rice, beans, salsa and lime-spiked sour cream.", "599.00"],
      ["Spiced Paneer Bowl", "Grilled paneer on cumin rice with roasted peppers, guac and fresh pico.", "649.00"],
      ["Warrior Chicken Bowl", "Grilled spiced chicken with cilantro rice, black beans, corn and chipotle crema.", "699.00"],
      ["Birria Fiesta Bowl", "Slow-braised birria lamb with rice, consommé broth and vibrant toppings.", "749.00"],
    ],
  },
  {
    category: "Shakes",
    items: [
      ["Vanilla Dream", "Classic vanilla shake topped with whipped cream.", "349.00"],
      ["Chocolate Crave", "Rich, creamy chocolate shake for every chocolate lover.", "349.00"],
      ["Oreo Overload", "A thick Oreo shake loaded with crunchy cookie goodness.", "349.00"],
      ["Caramel Indulgence", "Silky caramel shake finished with a buttery caramel drizzle.", "349.00"],
    ],
  },
  {
    category: "Mocktails",
    items: [
      ["Berry Blast", "Crisp cranberry flavor, zingy lime and strawberry crush.", "299.00"],
      ["Passion Basil Kiss", "Tangy passion fruit muddled with fresh basil and sparkling citrus water.", "299.00"],
      ["Mint Mojito", "Fresh lime, crushed mint and soda over ice - clean, cool and refreshing.", "299.00"],
      ["Cranberry Bloom", "Cranberry and lychee blend with a soft floral finish.", "299.00"],
      ["Watermelon Spritzer", "Watermelon and mint with a hint of elderflower.", "299.00"],
      ["Elderflower Sunset", "Floral elderflower with orange and passion fruit, fading into a sunset hue.", "299.00"],
      ["Cucumber Lime Fizz", "Crisp cucumber, zingy lime and sparkling water -- effervescently refreshing.", "299.00"],
    ],
  },

{
    category: "Beverage",
    items: [
      ["Coke/Diet Coke", "", "149.00"],
      ["Red Bull", "", "249.00"],
      ["Tonic Water", "", "149.00"],
      ["Ginger Ale", "", "149.00"],
      ["Bottled Water", "", "99.00"],
    ],
  },
  
  {
    category: "Coffee",
    items: [
      ["Cranberry Cold Brew", "Smooth cold brew espresso brightened with tart cranberry and citrus.", "299.00"],
      ["Vietnamese Coffee (Iced / Hot)", "Bold espresso over condensed milk and ice -- rich, sweet and chilled.", "299.00"],
      ["Espresso Tonic Fizz", "Double espresso poured over sparkling tonic - bittersweet and effervescent.", "299.00"],
      ["Citrus Espresso", "Bright espresso with fresh orange zest -- a floral citrus awakening.", "299.00"],
      ["Espresso", "Concentrated, velvety single-origin espresso with rich crema on top.", "199.00"],
      ["Cappuccino", "Balanced espresso layered with silky steamed milk and airy foam.", "249.00"],
      ["Cafe Latte", "Smooth espresso blended with steamed whole milk - gentle and creamy.", "249.00"],
      ["Midnight Cold Brew", "Slow-steeped 12-hour cold brew - bold, smooth and never bitter.", "249.00"],
      ["Affogato", "Hot espresso shot poured over velvety vanilla gelato - hot meets cold.", "299.00"],
      ["Coffee Frappé", "Blended iced coffee with cream - thick, frothy and irresistibly smooth.", "299.00"],
      ["Iced Americano", "Double espresso diluted over ice - bold, clean and powerfully refreshing.", "249.00"],
      ["Iced Latte", "Chilled espresso and milk foam poured over ice - effortlessly smooth.", "299.00"],
      ["Caramel Frappé", "Blended iced coffee swirled with buttery caramel sauce and whipped cream.", "299.00"],
      ["Nitro Brew", "Nitrogen-infused cold brew - cascading, creamy and silky-smooth naturally.", "349.00"],
    ],
  },
  {
    category: "Dessert",
    items: [
      ["Wild Berry Crumble", "Warm tangy mixed berries under a buttery golden oat crumble topping.", "399.00"],
      ["Tiramisu", "Espresso-soaked ladyfingers layered with silky mascarpone and cocoa dust.", "399.00"],
    ],
  },
  {
    category: "Sheesha",
    items: [
      {
        title: "REGULAR",
        items: [
          "PMC",
          "RPG",
          "Orange Paan Mint",
          "Commisioner",
          "Sea breeze",
          "Mango Paan",
          "Ice crush",
          "Rajni gandha",
          "Gold Mint",
          "Zafran",
          "Paan Kiwi Mint",
          "Black Magic",
          "Brainfreezer",
          "PMS",
        ],
      },

      
      {
        title: "TURKISH",
        items: ["Love 66", "Marbella", "Lady killer"],
      },
    ],
  },
];

const categoryChips = document.querySelector("#categoryChips");
const menuList = document.querySelector("#menuList");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");

let activeCategory = "All";



function formatPrice(price) {
  return `₹${price}`;
}

function getFilteredMenu() {
  const term = searchInput.value.trim().toLowerCase();

  return menu
    .filter((section) => activeCategory === "All" || section.category === activeCategory)
    .map((section) => {
      const items =
        section.category === "Sheesha"
          ? section.items
              .map((group) => ({
                ...group,
                items: group.items.filter((name) =>
                  `${section.category} ${group.title} ${name}`.toLowerCase().includes(term)
                ),
              }))
              .filter((group) => group.items.length > 0)
          : section.items.filter(([name, desc, price]) => {
              const haystack = `${section.category} ${name} ${desc} ${price}`.toLowerCase();
              return haystack.includes(term);
            });
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);
}

function renderCategories() {
  const categories = ["All", ...menu.map((section) => section.category)];

  categoryChips.innerHTML = categories
    .map(
      (category) => `
        <button
          class="chip ${category === activeCategory ? "active" : ""}"
          data-category="${category}"
        >
          <span>${category}</span>
        </button>
      `
    )
    .join("");
}

function renderMenu() {
  const filtered = getFilteredMenu();
  const totalItems = filtered.reduce((sum, section) => {
    if (section.category === "Sheesha") {
      return sum + section.items.reduce((groupSum, group) => groupSum + group.items.length, 0);
    }
    return sum + section.items.length;
  }, 0);

  resultCount.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"} shown`;

  if (totalItems === 0) {
    menuList.innerHTML = `<div class="empty-state">No items match your search.</div>`;
    return;
  }

  menuList.innerHTML = filtered
    .map(
      (section) => `
        ${
          section.category === "Sheesha"
            ? `
              <article class="category-section sheesha-section" data-category="${section.category}">
                <p class="section-brand">SAVOUR SOL</p>
                <h2 class="sheesha-title">SHEESHA</h2>
                ${section.items
                  .map(
                    (group) => `
                      <h3 class="sheesha-subtitle">${group.title}</h3>
                      <div class="sheesha-items">
                        ${group.items
                          .map(
                            (name) => `
                              <div class="sheesha-item">
                                <div class="sheesha-name">${name}</div>
                                <div class="sheesha-rule" aria-hidden="true">
                                  <span></span>
                                  <i></i>
                                  <span></span>
                                </div>
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    `
                  )
                  .join("")}
                <p class="gst-note">Taxes will be charged as applicable.</p>
              </article>
            `
            : `
              <article class="category-section" data-category="${section.category}">
                <p class="section-brand">SAVOUR SOL</p>
                <h2 class="category-title">${section.category}</h2>
                <div class="items">
                  ${section.items
                    .map(
                      ([name, desc, price]) => `
                        <div class="menu-item">
                          <h3 class="item-name">${name}</h3>
                          ${desc ? `<p class="item-desc">${desc}</p>` : ""}
                          <div class="price">${formatPrice(price)}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
                <p class="gst-note">Taxes will be charged as applicable.</p>
              </article>
            `
        }
      `
    )
    .join("");
}

categoryChips.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

renderCategories();
renderMenu();
