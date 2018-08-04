using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace DataAccessObject.Helper
{
    public abstract class DBHelper
    {
        public SqlCommand objCommand { get; set; }
        public SqlDataReader objReader { get; set; }
        public DataTable objDataTable { get; set; }
        public DataSet objDataSet { get; set; }

        public static DataTable ConvertToDataTable<T>(ICollection<T> lstData, Func<List<KeyValuePair<Type, string>>> funcName)
        {
            if (ReferenceEquals(funcName, null))
                throw new ArgumentException("Parameter funcName is null");

            List<KeyValuePair<Type, string>> lstProperties = funcName();

            using (DataTable dt = new DataTable())
            {
                foreach (var prop in lstProperties)
                    dt.Columns.Add(prop.Value, prop.Key);

                if (lstData != null)
                {
                    foreach (T data in lstData)
                    {
                        DataRow dr = dt.NewRow();
                        foreach (var prop in lstProperties)
                        {
                            //PropertyInfo propInfo = typeof(T).GetProperty(prop.Value);
                            dr[prop.Value] = data; //!ReferenceEquals(propInfo.GetValue(data), null) ?
                                                   //((prop.Key == typeof(String)) ? Convert.ToString(propInfo.GetValue(data)) : propInfo.GetValue(data))
                                                   //: DBNull.Value;
                        }
                        dt.Rows.Add(dr);
                    }
                }
                return dt;
            }
        }

        public static List<KeyValuePair<Type, string>> GetKeyValueProperties<T, T1>()
        {
            var lstMatchItemProperties = new List<KeyValuePair<Type, string>>();
            lstMatchItemProperties.Add(new KeyValuePair<Type, string>(typeof(T), "Key"));
            lstMatchItemProperties.Add(new KeyValuePair<Type, string>(typeof(T1), "Value"));
            return lstMatchItemProperties;
        }
    }
}
