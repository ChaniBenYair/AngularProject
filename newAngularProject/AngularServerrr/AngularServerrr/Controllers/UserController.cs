using AngularServerrr;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Xml.Linq;

namespace Recipe_App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private static List<User> users = new List<User>
        {
            new User
            {
                Code = 1,
                Name = "חני בן יאיר",
                Address = "בן זכאי",
                Email = "cby0556769826@gmail.com",
                Password = "123"
            },
            new User
            {
                Code = 2,
                Name = "אילי וורמסר",
                Address = "יהודה הלוי",
                Email = "a@gmail.com",
                Password = "123"
            },
              new User
            {
                Code = 3,
                Name = "שרי",
                Address = "רבי עקיבא",
                Email = "sari@gmail.com",
                Password = "123"
            }
        };

    // GET: api/<UserController>
    [HttpGet]
    public IEnumerable<User> Get()
    {
      return users;
    }

    // GET api/<UserController>/5
    [HttpGet("{id}")]
    public ActionResult<User> Get(int id)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      return user;
    }

    // POST api/<UserController>
    [HttpPost]
    public void Post([FromBody] User user)
    {
      users.Add(user);
    }

    // PUT api/<UserController>/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] User updatedUser)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      user.Name = updatedUser.Name;
      user.Address = updatedUser.Address;
      user.Email = updatedUser.Email;
      user.Password = updatedUser.Password;
      return NoContent();
    }

    // DELETE api/<UserController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      users.Remove(user);
      return NoContent();
    }
  }

 
}
