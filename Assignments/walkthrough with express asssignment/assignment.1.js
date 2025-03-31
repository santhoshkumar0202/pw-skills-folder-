let express=require("express") //here we are importing express using require method
let app=express()//by using express and assigning to app for creation of server and to leverage the apis
const port=3001// This the port number (actually processor at a particular device) example particular 102 flat no and to 1bedroom(port)

//here we are defining apis and rountings
app.get("/",(req,res)=>{
    res.send("welcome tom mens and womens data"
      )
})
app.get("/men",(req,res)=>{
res.json([
    {
      "id": 1,
      "name": "Men's Casual T-Shirt",
      "description": "A comfortable and stylish casual t-shirt for men.",
      "price": 19.99,
      "category": "Clothing",
      "size": ["S", "M", "L", "XL"],
      "color": ["Red", "Blue", "Black"],
      "brand": "BrandX"
    },
    {
      "id": 2,
      "name": "Men's Running Shoes",
      "description": "Lightweight running shoes designed for comfort and performance.",
      "price": 59.99,
      "category": "Footwear",
      "size": ["8", "9", "10", "11"],
      "color": ["Grey", "Black", "White"],
      "brand": "SportyLife"
    },
    {
      "id": 3,
      "name": "Men's Denim Jeans",
      "description": "Slim fit denim jeans with a modern look.",
      "price": 39.99,
      "category": "Clothing",
      "size": ["30", "32", "34", "36"],
      "color": ["Blue", "Black"],
      "brand": "DenimCo"
    },
    {
      "id": 4,
      "name": "Men's Leather Wallet",
      "description": "A sleek leather wallet with multiple compartments.",
      "price": 29.99,
      "category": "Accessories",
      "size": "One Size",
      "color": ["Brown", "Black"],
      "brand": "LuxLeather"
    },
    {
      "id": 5,
      "name": "Men's Sport Watch",
      "description": "Durable sport watch with water resistance and fitness tracking.",
      "price": 129.99,
      "category": "Accessories",
      "size": "One Size",
      "color": ["Black", "Silver"],
      "brand": "TimeTech"
    },
    {
      "id": 6,
      "name": "Men's Bomber Jacket",
      "description": "A stylish bomber jacket perfect for cooler weather.",
      "price": 79.99,
      "category": "Clothing",
      "size": ["M", "L", "XL"],
      "color": ["Olive", "Black"],
      "brand": "UrbanStyle"
    },
    {
      "id": 7,
      "name": "Men's Sunglasses",
      "description": "Sleek sunglasses offering 100% UV protection.",
      "price": 49.99,
      "category": "Accessories",
      "size": "One Size",
      "color": ["Black", "Silver"],
      "brand": "SunVision"
    },
    {
      "id": 8,
      "name": "Men's Hoodie",
      "description": "Cozy hoodie perfect for casual wear or lounging.",
      "price": 39.99,
      "category": "Clothing",
      "size": ["S", "M", "L", "XL"],
      "color": ["Gray", "Navy", "Black"],
      "brand": "ChillWear"
    },
    {
      "id": 9,
      "name": "Men's Dress Shirt",
      "description": "A classic dress shirt suitable for formal occasions.",
      "price": 49.99,
      "category": "Clothing",
      "size": ["M", "L", "XL", "XXL"],
      "color": ["White", "Light Blue"],
      "brand": "SmartFit"
    },
    {
      "id": 10,
      "name": "Men's Sneakers",
      "description": "Stylish sneakers designed for comfort and durability.",
      "price": 69.99,
      "category": "Footwear",
      "size": ["8", "9", "10", "11"],
      "color": ["White", "Black", "Blue"],
      "brand": "StreetGear"
    }
  ])
})
app.get("/women",(req,res)=>{
    res.json([
        {
          "id": 1,
          "name": "Women's Floral Dress",
          "description": "A beautiful floral print dress perfect for summer occasions.",
          "price": 49.99,
          "category": "Clothing",
          "size": ["S", "M", "L", "XL"],
          "color": ["Pink", "White", "Blue"],
          "brand": "FloralVibes"
        },
        {
          "id": 2,
          "name": "Women's Running Shoes",
          "description": "Comfortable and stylish running shoes designed for active women.",
          "price": 69.99,
          "category": "Footwear",
          "size": ["6", "7", "8", "9"],
          "color": ["Black", "Pink", "Grey"],
          "brand": "ActiveStride"
        },
        {
          "id": 3,
          "name": "Women's Leather Handbag",
          "description": "Premium quality leather handbag with a sleek design.",
          "price": 129.99,
          "category": "Accessories",
          "size": "One Size",
          "color": ["Black", "Brown", "Beige"],
          "brand": "EleganceCo"
        },
        {
          "id": 4,
          "name": "Women's High-Waisted Jeans",
          "description": "Stylish and comfortable high-waisted jeans for a trendy look.",
          "price": 39.99,
          "category": "Clothing",
          "size": ["28", "30", "32", "34"],
          "color": ["Blue", "Black", "White"],
          "brand": "DenimStyle"
        },
        {
          "id": 5,
          "name": "Women's Silk Scarf",
          "description": "Luxurious silk scarf perfect for adding elegance to any outfit.",
          "price": 39.99,
          "category": "Accessories",
          "size": "One Size",
          "color": ["Red", "Black", "Navy"],
          "brand": "SilkCouture"
        },
        {
          "id": 6,
          "name": "Women's Yoga Pants",
          "description": "Stretchy and comfortable yoga pants ideal for active women.",
          "price": 29.99,
          "category": "Clothing",
          "size": ["S", "M", "L", "XL"],
          "color": ["Black", "Grey", "Purple"],
          "brand": "FitLife"
        },
        {
          "id": 7,
          "name": "Women's Biker Jacket",
          "description": "A classic black biker jacket to add an edgy vibe to any look.",
          "price": 89.99,
          "category": "Clothing",
          "size": ["S", "M", "L", "XL"],
          "color": ["Black", "Brown"],
          "brand": "MotoWear"
        },
        {
          "id": 8,
          "name": "Women's Sunglasses",
          "description": "Stylish sunglasses offering UV protection for sunny days.",
          "price": 24.99,
          "category": "Accessories",
          "size": "One Size",
          "color": ["Black", "Gold", "Silver"],
          "brand": "SunnyVision"
        },
        {
          "id": 9,
          "name": "Women's Cozy Sweater",
          "description": "A cozy and warm sweater perfect for chilly weather.",
          "price": 39.99,
          "category": "Clothing",
          "size": ["S", "M", "L", "XL"],
          "color": ["Cream", "Grey", "Black"],
          "brand": "WarmHug"
        },
        {
          "id": 10,
          "name": "Women's Flat Sandals",
          "description": "Comfortable flat sandals for a relaxed and stylish look.",
          "price": 29.99,
          "category": "Footwear",
          "size": ["6", "7", "8", "9"],
          "color": ["Tan", "Black", "White"],
          "brand": "BeachVibes"
        }
      ]
      )

})
app.get("/others",(req,res)=>{
res.status(404).json({messsage:"Not Found"})
})

//here we start the server by listening to calls
app.listen(port,()=>{
    console.log(`server is running at:${port} `)
})