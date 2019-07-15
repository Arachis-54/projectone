package com.pojo;

public class category {
    private int id;
    private String cateName;
    private String cateDes;

    @Override
    public String toString() {
        return "category{" +
                "id=" + id +
                ", cateName='" + cateName + '\'' +
                ", cateDes='" + cateDes + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCateName() {
        return cateName;
    }

    public void setCateName(String cateName) {
        this.cateName = cateName;
    }

    public String getCateDes() {
        return cateDes;
    }

    public void setCateDes(String cateDes) {
        this.cateDes = cateDes;
    }
}
