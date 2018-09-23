using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace HelperObject
{
    public static class FileHelper
    {
        public static string GenerateFileName(string fileName)
        {
            if (Tools.IsNullOREmpty(fileName))
                throw new ApplicationException("Invalid fileName");
            string currentDate = DateTime.Now.ToString("yyyyMMdd_hhmmssfff");
            string fileExtension = Path.GetExtension(fileName);
            string onlyFileName = Path.GetFileNameWithoutExtension(fileName);
            return string.Concat(onlyFileName, currentDate, fileExtension);
        }
    }
}
