package com.pojo;

public class admins {
    private int adminid;
    private String adminname;
    private String adminpass;

    @Override
    public String toString() {
        return "admins{" +
                "adminid=" + adminid +
                ", adminname='" + adminname + '\'' +
                ", adminpass='" + adminpass + '\'' +
                '}';
    }

    public int getAdminid() {
        return adminid;
    }

    public void setAdminid(int adminid) {
        this.adminid = adminid;
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }

    public String getAdminpass() {
        return adminpass;
    }

    public void setAdminpass(String adminpass) {
        this.adminpass = adminpass;
    }
}
