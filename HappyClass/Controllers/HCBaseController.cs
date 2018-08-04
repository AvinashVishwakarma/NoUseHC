using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HappyClasses.Controllers
{
    public abstract class HCBaseController : Controller
    {
        protected readonly IConfiguration AppSetting;
        public HCBaseController(IConfiguration configuration)
        {
            AppSetting = configuration;
        }
    }
}