using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetOlogy.Controllers
{
    [Route("Character")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Character> get()
        {

            return new List<Character>
            {
                new Character { firstName = "Dyonisos" , age = 500 },
                new Character { firstName = "Certenos" , age = 143 },
                new Character { firstName = "Athenas" , age = 300 },
                new Character { firstName = "Pegaze" , age = 234 }


            };

            
        }
    }
}
