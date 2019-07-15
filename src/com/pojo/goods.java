package com.pojo;

public class goods {
    private int id;
    private String name;
    private double goodsPrice;
    private int goodTotal;
    private int cateid;

    @Override
    public String toString() {
        return "goods{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", goodsPrice=" + goodsPrice +
                ", goodTotal=" + goodTotal +
                ", cateid=" + cateid +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getGoodsPrice() {
        return goodsPrice;
    }

    public void setGoodsPrice(double goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

    public int getGoodTotal() {
        return goodTotal;
    }

    public void setGoodTotal(int goodTotal) {
        this.goodTotal = goodTotal;
    }

    public int getCateid() {
        return cateid;
    }

    public void setCateid(int cateid) {
        this.cateid = cateid;
    }
}
