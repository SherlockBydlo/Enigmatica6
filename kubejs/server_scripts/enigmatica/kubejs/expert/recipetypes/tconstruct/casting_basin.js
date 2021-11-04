onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                fluid: 'tconstruct:molten_hepatizon',
                fluid_amount: 576,
                casts: [{ item: 'botania:ender_eye_block' }],
                cast_consumed: true,
                output: 'betterendforge:infusion_pedestal',
                cooling_time: 233,
                id: 'betterendforge:infusion_pedestal'
            },
            {
                fluid: 'tconstruct:molten_obsidian',
                fluid_amount: 8000,
                casts: [{ item: 'thermal:machine_frame' }],
                cast_consumed: true,
                output: 'dankstorage:dock',
                cooling_time: 640,
                id: 'dankstorage:dock'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
