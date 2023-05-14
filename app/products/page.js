"use client";
import { Card } from "flowbite-react";
import Header from "./components/Header";
import Add from "./components/Add";

function Products() {
    return (
        <Card className="w-3/4 mx-auto">
            <div className="mx-auto">
                <Header />
            </div>
            <Add />
        </Card>
    );
}

export default Products;
