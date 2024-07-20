import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "../ui/button";

const AddProduct = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded bg-customOrange px-4 py-2 text-white hover:bg-orange-600">
        Add Product
      </DialogTrigger>
      <DialogOverlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0">
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="modal-title">Add new Product</DialogTitle>
            <DialogDescription className="modal-desc">
              Create a new product
            </DialogDescription>
          </DialogHeader>
          {/* Product Name */}
          <div className="max-full grid w-full items-center gap-1.5">
            <Label htmlFor="name">Product name</Label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="e.g Jon Doe"
            />
          </div>
          {/* Product description */}
          <div className="grid w-full gap-1.5">
            <Label htmlFor="desc">Product Description</Label>
            <Textarea placeholder="add product description" id="desc" />
          </div>
          {/* Product price */}
          <div className="max-full grid w-full items-center gap-1.5">
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              type="text"
              id="price"
              placeholder="e.g 2000.00"
            />
          </div>
          {/* Product Quantity */}
          <div className="max-full grid w-full items-center gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              name="quantity"
              type="text"
              id="quantity"
              placeholder="e.g 1000"
            />
          </div>
          {/* Upload Images */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="images">Upload images</Label>
            <Input name="images" id="images" type="file" />
          </div>
          <div className="opacity-1 flex h-86 w-288 gap-3">
            <div className="h-86 w-86 rounded-4 bg-customGray"></div>
            <div className="h-86 w-86 rounded-4 bg-customGray"></div>
            <div className="h-86 w-86 rounded-4 bg-customGray"></div>
          </div>
          <DialogFooter>
            {/* Submit Button */}
            <Button
              type="submit"
              name="addProduct"
              className="rounded bg-customOrange px-4 py-2 text-white hover:bg-orange-600"
            >
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default AddProduct;
