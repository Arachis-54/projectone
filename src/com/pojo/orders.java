package com.pojo;

import java.util.Date;

public class orders {
    private int id;
    private String orderNo;
    private int orderCount;
    private Date orderTime;
    private int orderStatus;
    private String orderAddress;
    private double orderTotalprice;
    private int cid;
    private int goodid;

    @Override
    public String toString() {
        return "orders{" +
                "id=" + id +
                ", orderNo='" + orderNo + '\'' +
                ", orderCount=" + orderCount +
                ", orderTime=" + orderTime +
                ", orderStatus=" + orderStatus +
                ", orderAddress='" + orderAddress + '\'' +
                ", orderTotalprice=" + orderTotalprice +
                ", cid=" + cid +
                ", goodid=" + goodid +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public int getOrderCount() {
        return orderCount;
    }

    public void setOrderCount(int orderCount) {
        this.orderCount = orderCount;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public int getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(int orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }

    public double getOrderTotalprice() {
        return orderTotalprice;
    }

    public void setOrderTotalprice(double orderTotalprice) {
        this.orderTotalprice = orderTotalprice;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getGoodid() {
        return goodid;
    }

    public void setGoodid(int goodid) {
        this.goodid = goodid;
    }
}
