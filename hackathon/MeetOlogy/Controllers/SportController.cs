using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetOlogy.Controllers
{
    [Route("sport")]
    [ApiController]
    public class SportController : ControllerBase
    {
       public IEnumerable<Sport> get()
        {
            return new List<Sport>
            {
                new Sport { sportName ="Barathon,"},
                new Sport { sportName ="Hunt"},
                new Sport { sportName ="Quidditch"}, 
            };
        }
        

        
    }
}
