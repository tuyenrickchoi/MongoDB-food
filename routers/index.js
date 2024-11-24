    const categoryRouter = require("./category.router");									
    const foodRouter = require("./food.router"); // Import food router

  
    
                                        
    module.exports = (app) => {									
    app.use("/api/categories", categoryRouter);								
    app.use("/api/foods", foodRouter); // Sử dụng food router tại endpoint "/api/foods"									
    }									