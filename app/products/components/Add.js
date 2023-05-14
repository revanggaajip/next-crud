"use client";
import React, { useState } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

function Add() {
    const [modal, setModal] = useState(false);
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState(0);

    const {
        watch,
        reset,
        setValue,
        control,
        register,
        trigger,
        getValues,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm();

    const handleModal = () => {
        setModal(!modal);
    };

    const onSubmit = async (data) => {
        // e.preventDefault();
        // console.log(data.name, price);

        axios
            .post("http://localhost:8080/products/create", {
                name: getValues("name"),
                price: getValues("price"),
            })
            .then((res) => {
                console.log(res);
                setValue("name", "");
                setValue("price", "");
                setModal(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <React.Fragment>
            <Button onClick={handleModal} className="w-40">
                Input Product
            </Button>
            <Modal show={modal} size="md" popup={true} onClose={handleModal}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Input New Product
                            </h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Product" />
                                </div>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: onChange, value }) => {
                                        return (
                                            <TextInput
                                                id="name"
                                                placeholder="Bayam"
                                                onChange={(e) => {
                                                    setValue(
                                                        "name",
                                                        e.target.value
                                                    );
                                                }}
                                                value={value}
                                            />
                                        );
                                    }}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="price"
                                        value="Product Price"
                                    />
                                </div>
                                <Controller
                                    control={control}
                                    name="price"
                                    rules={{ required: true }}
                                    defaultValue=""
                                    render={({ field: onChange, value }) => {
                                        return (
                                            <TextInput
                                                id="price"
                                                type="number"
                                                onChange={(e) =>
                                                    setValue(
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                                value={value}
                                            />
                                        );
                                    }}
                                />
                            </div>
                            <div className="w-full">
                                <Button type="submit">Save</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default Add;
