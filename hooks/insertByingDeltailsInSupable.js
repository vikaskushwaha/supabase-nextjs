
'use server'

import { createClient } from "@/utils/supabse/server";

export const BuyingDetailsInBuyingTable = async (orderDetails, userId) => {
    // console.log(orderDetails);
    // console.log(typeof (orderDetails));
    orderDetails = [orderDetails];

    const formattedPlans = orderDetails.map((order) => ({
        bying_date: new Date().toISOString(),
        asset_type: order.asset_type,
        product_id: order._id,
        providerId: order['Created By'],
        description: order.description,
        item_thumbnail: order.item_thumbnail,
        Product_created_date: order["Created Date"],
        product_modified_date: order["Modified Date"],
        title: order.title,
        bying_status: true,
        price: order.price,
        patient_id: userId,
        product_status: order.status,
        asset: order.asset

    }))
    // console.log(formattedPlans);
    try {
        const supabase = await createClient()
        const { data, error } = await supabase.from("Buying_table").insert(formattedPlans);
        if (error) {
            console.log(error);

        }
    } catch (error) {
        console.log("error in inserting data in supabse ", error)
    }

}