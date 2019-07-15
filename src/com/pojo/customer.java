package com.pojo;

public class customer {
    private int id;
    private String cname;
    private String cpass;
    private String ctel;
    private String cemail;

    @Override
    public String toString() {
        return "customer{" +
                "id=" + id +
                ", cname='" + cname + '\'' +
                ", cpass='" + cpass + '\'' +
                ", ctel='" + ctel + '\'' +
                ", cemail='" + cemail + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getcpass() {
        return cpass;
    }

    public void setcpass(String cpass) {
        this.cpass = cpass;
    }

    public String getCtel() {
        return ctel;
    }

    public void setCtel(String ctel) {
        this.ctel = ctel;
    }

    public String getCemail() {
        return cemail;
    }

    public void setCemail(String cemail) {
        this.cemail = cemail;
    }
}
