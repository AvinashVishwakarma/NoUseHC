using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace DataAccessObject.Helper
{
    class DataHelper
    {
        #region Member variables
        static string databaseOwner = "dbo";	// overwrite in web.config
        string _connectionString = null;
        #endregion

        #region Connection

        public string connectionString
        {
            get
            {
                return _connectionString;
            }
            set
            {
                _connectionString = value;
            }
        }
        public static IConfiguration Configuration { get; set; }

        public static SqlConnection GetConnection()
        {
            SqlConnection conn;
            try
            {
                var builder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json");

                Configuration = builder.Build();

                //string constr = ConfigurationSettings.AppSettings["ccConnectionString"].ToString();
                string constr = Configuration["ccConnectionString"]; //ConfigurationManager.ConnectionStrings["ccConnectionString"].ToString();
                conn = new SqlConnection(constr);
            }
            catch
            {
                throw new Exception("SQL Connection String is invalid.");
            }
            return conn;
        }

        public static void CloseConnection(SqlConnection conn)
        {
            if (conn.State == ConnectionState.Open)
                conn.Close();
        }

        #endregion

        #region Helper methods
        public static int ExecuteNonQuery(string procedureName)
        {
            int rowsAffected = 0;
            SqlConnection connection = GetConnection();
            SqlCommand command = new SqlCommand();
            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                command.Connection = connection;
                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return rowsAffected;
        }

        public static int ExecuteNonQuery(string procedureName, SqlCommand command)
        {
            int rowsAffected = 0;
            SqlConnection connection = GetConnection();

            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                command.Connection = connection;
                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return rowsAffected;
        }

        public static int ExecuteNonQuerySQL(string strQuery, SqlCommand command)
        {
            int rowsAffected = 0;
            SqlConnection connection = GetConnection();
            try
            {
                command.CommandText = strQuery;
                command.Connection = connection;
                command.CommandType = CommandType.Text;
                connection.Open();
                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return rowsAffected;
        }

        public static int ExecuteNonQuerySQL(string strQuery)
        {
            int rowsAffected = 0;
            SqlConnection connection = GetConnection();
            SqlCommand command = new SqlCommand();
            try
            {
                command.CommandText = strQuery;
                command.Connection = connection;
                command.CommandType = CommandType.Text;
                connection.Open();
                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return rowsAffected;
        }

        public static int ExecuteScalar(string procedureName, SqlCommand command)
        {
            SqlConnection connection = GetConnection();

            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;

                //Mark As Stored Procedure
                command.CommandType = CommandType.StoredProcedure;

                connection.Open();
                return Convert.ToInt32(command.ExecuteScalar());
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
        }

        public static int ExecuteScalar(string procedureName)
        {
            SqlConnection connection = GetConnection();
            SqlCommand command = new SqlCommand();
            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                return Convert.ToInt32(command.ExecuteScalar());
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
        }

        public static Int64 ExecuteScalar64(string procedureName, SqlCommand command)
        {
            SqlConnection connection = GetConnection();
            Int64 intReturnValue = 0;
            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                intReturnValue = Convert.ToInt64(command.ExecuteScalar());
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }

            return intReturnValue;
        }

        public static Int64 ExecuteScalar64(string procedureName)
        {
            SqlConnection connection = GetConnection();
            SqlCommand command = new SqlCommand();
            Int64 intReturnValue = 0;
            try
            {
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                intReturnValue = Convert.ToInt64(command.ExecuteScalar());
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }

            return intReturnValue;
        }

        public static DataSet GetDataSet(string procedureName, SqlCommand command = null)
        {
            SqlConnection connection = GetConnection();
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter();
            if (command == null)
                command = new SqlCommand();
            try
            {
                command.CommandTimeout = 0;
                connection.Open();
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                da.SelectCommand = command;
                da.Fill(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return ds;
        }

        public static DataTable GetDataTable(string procedureName, SqlCommand command = null)
        {
            SqlConnection connection = GetConnection();
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter();
            if (command == null)
                command = new SqlCommand();
            try
            {
                command.CommandTimeout = 0;
                connection.Open();
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                da.SelectCommand = command;
                da.Fill(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                    connection.Close();
                command.Dispose();
                connection.Dispose();
            }
            return ds.Tables[0];
        }

        public static SqlDataReader ExecuteReader(string procedureName, SqlCommand command = null)
        {
            SqlConnection connection = GetConnection();
            SqlDataReader dr = null;
            if (command == null)
                command = new SqlCommand();
            try
            {
                command.CommandTimeout = 0;
                command.CommandText = databaseOwner + "." + procedureName;
                command.Connection = connection;
                connection.Open();
                command.CommandType = CommandType.StoredProcedure;
                dr = command.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dr;
        }

        #endregion

    }
}
