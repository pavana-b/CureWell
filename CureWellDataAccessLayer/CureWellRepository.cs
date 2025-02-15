﻿using CureWellDataAccessLayer.Models;

namespace CureWellDataAccessLayer
{
    public class CureWellRepository
    {
        public CureWellDbContext Context { get; set; }

        #region CureWellRepository - Do not modify 
        public CureWellRepository(CureWellDbContext context)
        {
            Context = context;
        }
        #endregion

        #region GetAllDoctors - Do not modify the signature
        public List<Doctor> GetAllDoctors()
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            List<Doctor> doctors = new List<Doctor>();
            try
            {
                doctors = (from doctor in Context.Doctors select doctor).ToList();
            }
            catch (Exception e)
            {
                doctors = new List<Doctor>();
                Console.WriteLine(e.Message);
            }
            return doctors;
        }

        #endregion

        #region GetAllSpecializations - Do not modify the signature
        public List<Specialization> GetAllSpecializations()
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            List<Specialization> specList = new List<Specialization>();
            try
            {
                specList = (from specialization in Context.Specializations select specialization).ToList();

            }
            catch (Exception)
            {
                specList = new List<Specialization>();
            }
            return specList;
        }

        #endregion

        #region GetAllSurgeryTypeForToday - Do not modify the signature
        public List<Surgery> GetAllSurgeryTypeForToday()
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            List<Surgery> lstSurgeries = new List<Surgery>();
            try
            {
                lstSurgeries = (from surgeries in Context.Surgeries where surgeries.SurgeryDate == DateOnly.FromDateTime(DateTime.Now) select surgeries).ToList();
            }
            catch (Exception)
            {
                lstSurgeries = new List<Surgery>();
            }

            return lstSurgeries;
        }

        #endregion

        #region AddDoctor - Do not modify the signature
        public bool AddDoctor(Doctor dObj)
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            try
            {
                Context.Doctors.Add(dObj);
                Context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        #endregion

        #region UpdateDoctorDetails - Do not modify the signature
        public bool UpdateDoctorDetails(Doctor dObj)
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            Doctor updatedocObj = new Doctor();
            try
            {
                updatedocObj = Context.Doctors.Find(dObj.DoctorId);
                if (updatedocObj != null)
                {
                    updatedocObj.DoctorName = dObj.DoctorName;
                    Context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception)
            {
                return false;
            }
        }

        #endregion

        #region UpdateSurgery - Do not modify the signature
        public bool UpdateSurgery(Surgery SObj)
        {
            //To Do: Implement appropriate logic and change the return statement as per your logic
            Surgery surgery = new Surgery();
            bool status = false;
            try
            {
                surgery = Context.Surgeries.Find(SObj.SurgeryId);
                if (surgery != null)
                {
                    surgery.StartTime = SObj.StartTime;
                    surgery.EndTime = SObj.EndTime;
                    Context.SaveChanges();
                    status = true;
                }
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region DeleteDoctor - Do not modify the signature
        public bool DeleteDoctor(Doctor doctorObj)
        {
            bool status = false;
            try
            {
                Doctor doctor = Context.Doctors.Find(doctorObj.DoctorId);
                if (doctor != null)
                {
                    Context.Doctors.Remove(doctor);
                    Context.SaveChanges();
                    status = true;
                }
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion
    }
}
