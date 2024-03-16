using AngularServerrr;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Recipe_App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RecipeController : ControllerBase
  {
    private static List<Recipe> recipes = new List<Recipe> {
     new Recipe {
        RecipeCode = 0,
        RecipeName = "עוגת קומוות חגיגית",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 4,
        ImageRoute = "../../../../../assets/imges/cakes/1.jpg"
      },

     new Recipe {
        RecipeCode = 1,
        RecipeName = " מקרונים וניל",
        CategoryCode = 3,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 1,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 2,
        ImageRoute = "../../../../../assets/imges/cakes/2.jpg"

      },
     new Recipe {
        RecipeCode = 2,
        RecipeName = "פאי פיסטוק",
        CategoryCode = 1,
        PreparationTimeInMinutes = 30,
        DifficultyLevel = 4,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },

        UserCode = 1,
        ImageRoute = "../../../../../assets/imges/cakes/3.jpg"
      },

     new Recipe
{
    RecipeCode = 3,
    RecipeName = "עוגיות קרמל ממולאות",
    CategoryCode = 2,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string>
    {
        "375 גרם קמח",
        "12 גרם אבקת אפייה (1 כף)",
        "½ כפית מלח",
        "110 גרם חמאה רכה (בטמפ' החדר)",
        "105 גרם שמן קנולה",
        "300 גרם סוכר",
        "ביצים גדולות (בטמפ' החדר)",
        "1 כף תמצית וניל",
        "280 גרם רוויון (בטמפ' החדר)"
    },
    PreparationSteps = new List<string>
    {
        "חימום תנור ל-175°C",
        "משמנים קלות את שלושת תבניות האפייה ומרפדים את התחתית בנייר אפייה",
        "מערבבים קמח, אבקת אפייה ומלח בקערה בינונית ושומרים בצד",
        "מקציפים חמאה רכה, שמן וסוכר בקערת המיקסר עד לקבלת קרם אחיד",
        "מוסיפים ביצים בהדרגה ומקציפים עד להטמעה",
        "מוסיפים תמצית וניל ומערבבים",
        "מוסיפים שליש מתערובת האבקות לתוך הבלילה ומערבבים בעדינות",
        "מוסיפים חצי מהרוויון ומערבבים, מוסיפים את השליש השני ומערבבים, לבסוף מוסיפים את שאר הרוויון ומערבבים עד שהבלילה אחידה",
        "מחלקים את הבלילה ל-3 קערות ומוסיפים צבעים אחרים לכל קערה",
        "מוזגים כל חלק לתוך תבנית אפייה ואופים כ-17-18 דקות",
        "מצננים ומסירים מהתבנית לפני ההרכבה"
    },
    UserCode = 4,
    ImageRoute = "../../../../../assets/imges/cakes/4.jpg"
},
     new Recipe
{
    RecipeCode = 4,
    RecipeName = "פטיפור קונוס",
    CategoryCode = 4,
    PreparationTimeInMinutes = 15,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 3,
    ImageRoute = "../../../../../assets/imges/cakes/5.jpg"
},
     new Recipe
{
    RecipeCode = 10,
    RecipeName = "עוגת אגוזי לוז",
    CategoryCode = 1,
    PreparationTimeInMinutes = 100,
    DifficultyLevel = 4,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/9.jpg"
},
     new Recipe
{
    RecipeCode = 5,
    RecipeName = " עוגת קרמל מלוח",
    CategoryCode = 3,
    PreparationTimeInMinutes = 20,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 5,
    ImageRoute = "../../../../../assets/imges/cakes/6.jpg"
},
     new Recipe
      {
        RecipeCode = 12,
        RecipeName = "עוגת קומות",
        CategoryCode = 5,
        PreparationTimeInMinutes = 15,
        DifficultyLevel = 1,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 1,
        ImageRoute = "../../../../../assets/imges/cakes/8.jpg"
      },
     new Recipe
{
    RecipeCode = 6,
    RecipeName = "עוגת קריסטל",
    CategoryCode = 1,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/21.jpg"
},
     new Recipe
{
    RecipeCode = 14,
    RecipeName = "עוגת גבינה עם אוכמניות",
    CategoryCode = 1,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/10.jpg"
},
     new Recipe
{
    RecipeCode = 7,
    RecipeName = "קרמבו חלבי",
    CategoryCode = 3,
    PreparationTimeInMinutes = 65,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/11.jpg"
},
    new Recipe
{
    RecipeCode = 8,
    RecipeName = "טורט קדאיף",
    CategoryCode = 3,
    PreparationTimeInMinutes = 65,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/12.jpg"
},
    new Recipe
{
    RecipeCode = 9,
    RecipeName = "עוגת שוקולית קלה",
    CategoryCode = 1,
    PreparationTimeInMinutes = 50,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "ביצים", "חמאה", "שוקולית" },
    PreparationSteps = new List<string> { "להקציף חמאה וסוכר", "להוסיף ביצים ולערבב", "להוסיף קמח ולערבב עד שהתערובת חלקה", "להוסיף שוקולית קצוצה ולערבב שוב", "לשפוף לתבנית ולאפות בתנור שחומם מראש" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/13.jpg"
},
new Recipe
{
    RecipeCode = 10,
    RecipeName = "מאפינים תפוחים וקינמון",
    CategoryCode = 1,
    PreparationTimeInMinutes = 35,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "תפוחים", "קינמון", "בצל", "בקבוק מים קפוא", "קמח" },
    PreparationSteps = new List<string> { "לקצוץ את התפוחים לקוביות קטנות", "לשלב עם קינמון ובקבוק מים קפוא", "להוסיף בצל קצוץ ולערבב היטב", "להוסיף קמח ולערבב עד לקבלת תערובת אחידה", "לשפוף לתבניות למאפינים ולאפות בתנור" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/14.jpg"
},
new Recipe
{
    RecipeCode = 11,
    RecipeName = "עוגת גבינה ושוקולית",
    CategoryCode = 1,
    PreparationTimeInMinutes = 60,
    DifficultyLevel = 4,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קורט גבינה", "סוכר", "ביצים", "שוקולית", "קמח" },
    PreparationSteps = new List<string> { "להקציף קורט גבינה עם סוכר", "להוסיף ביצים ולערבב היטב", "להוסיף שוקולית ולערבב שוב", "להוסיף קמח ולערבב עד שהתערובת אחידה", "לשפוף לתבנית ולאפות בתנור שחומם מראש" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/15.jpg"
},
new Recipe
{
    RecipeCode = 12,
    RecipeName = "קפה קיימל",
    CategoryCode = 1,
    PreparationTimeInMinutes = 40,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "קקאו", "קפה", "חמאה", "קינמון" },
    PreparationSteps = new List<string> { "להקציף חמאה וסוכר", "להוסיף קמח וקקאו ולערבב", "להוסיף קפה נטול סוכר ולערבב שוב", "להוסיף קינמון ולערבב עד שהתערובת אחידה", "לשפוף לתבנית ולאפות בתנור שחומם מראש" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/16.jpg"
},
new Recipe
{
    RecipeCode =13,
    RecipeName = "פטיפורי תפוחים וקינמון",
    CategoryCode = 1,
    PreparationTimeInMinutes = 30,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "תפוחים", "סוכר", "קינמון", "קמח", "חמאה" },
    PreparationSteps = new List<string> { "לקצוץ את התפוחים לקוביות קטנות", "לטגן את התפוחים במחבת עם חמאה", "להוסיף סוכר וקינמון ולערבב היטב", "להוסיף קמח ולערבב עד שהתערובת מתייצבת", "לטגן בסיר עם המזון" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/17.jpg"
},
new Recipe
{
    RecipeCode = 14,
    RecipeName = "פטיפורי שוקולית וקשיו",
    CategoryCode = 1,
    PreparationTimeInMinutes = 40,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "שוקולית", "קשיו", "קמח", "חמאה", "סוכר" },
    PreparationSteps = new List<string> { "לטגן קשיו במחבת עם חמאה", "להוסיף שוקולית קצוצה ולערבב", "להוסיף סוכר וקמח ולערבב עד שהתערובת מתייצבת", "לטגן בסיר עם המזון", "לקרואסון בסוף" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/18.jpg"
},
new Recipe
{
    RecipeCode = 15,
    RecipeName = "פטיפורי קוקוס ושוקולית",
    CategoryCode = 1,
    PreparationTimeInMinutes = 25,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קוקוס", "שוקולית", "קמח", "חמאה", "סוכר" },
    PreparationSteps = new List<string> { "לטגן קוקוס במחבת עם חמאה", "להוסיף שוקולית קצוצה ולערבב", "להוסיף סוכר וקמח ולערבב עד שהתערובת מתייצבת", "לטגן בסיר עם המזון", "לקרואסון בסוף" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/19.jpg"
},
new Recipe
{
    RecipeCode = 16,
    RecipeName = "פטיפורי תפוחים וחמאת בוטנים",
    CategoryCode = 1,
    PreparationTimeInMinutes = 35,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "תפוחים", "חמאת בוטנים", "קמח", "חמאה", "סוכר" },
    PreparationSteps = new List<string> { "לקצוץ את התפוחים לקוביות קטנות", "לטגן את התפוחים במחבת עם חמאה", "להוסיף חמאת בוטנים ולערבב", "להוסיף סוכר וקמח ולערבב עד שהתערובת מתייצבת", "לטגן בסיר עם המזון" },
    UserCode = 1,
    ImageRoute = "../../../../../assets/imges/cakes/20.jpg"
},


                                                                                                        

  };

    [HttpGet]
    public IEnumerable<Recipe> Get()
    {
      return recipes;
    }

    [HttpGet("{id}")]
    public ActionResult<Recipe> Get(int id)
    {
      var recipe = recipes.Find(x => x.RecipeCode == id);
       if (recipe == null)
        {
        return NotFound();
        }
      return recipe;
    }

    [HttpPost]
    public void Post([FromBody] Recipe recipe)
    {
      recipe.RecipeCode =recipes[ recipes.Count()-1].RecipeCode + 1;
      recipe.DateAdded = DateTime.Now;
      recipe.ImageRoute = "../../../../../assets/imges/cakes/21.jpg";
      recipes.Add(recipe);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Recipe updatedRecipe)
    {
      var recipe = recipes.Find(r => r.RecipeCode == id);
      if (recipe != null)
      {
        recipe.RecipeName = updatedRecipe.RecipeName;
        recipe.CategoryCode = updatedRecipe.CategoryCode;
        recipe.PreparationTimeInMinutes = updatedRecipe.PreparationTimeInMinutes;
        recipe.DifficultyLevel = updatedRecipe.DifficultyLevel;
        recipe.Ingredients = updatedRecipe.Ingredients;
        recipe.PreparationSteps = updatedRecipe.PreparationSteps;
        recipe.UserCode = updatedRecipe.UserCode;
        recipe.ImageRoute = updatedRecipe.ImageRoute;
      }
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var recipe = recipes.Find(r => r.RecipeCode == id);
      if (recipe != null)
      {
        recipes.Remove(recipe);
      }
    }
  }
}
