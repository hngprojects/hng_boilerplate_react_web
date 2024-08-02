"use client";

import { Camera, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

interface NewSqueeze {
  title: string;
  uri: string;
  headline: string;
  subHeadline: string;
  body: string;
}

export default function New() {
  const router = useRouter();

  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();
  const [newSqueeze, setNewSqueeze] = useState<NewSqueeze>({
    title: "",
    uri: "",
    headline: "",
    subHeadline: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const inputReference = useRef(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    const inputElement = inputReference.current;
    if (inputElement) {
      (inputElement as HTMLInputElement).click();
    }
  };

  const clearImage = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation();
    setImage(undefined);
    setPreview(undefined);
  };

  const previewPage = () => {
    router.push("/dashboard/admin/squeeze/preview");
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setNewSqueeze({
      ...newSqueeze,
      [name]: value,
    });
  };

  const createSqueeze = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { title, uri, headline, subHeadline, body } = newSqueeze;

    if (!title || !uri || !headline || !subHeadline || !body || !image) return;
    setLoading(true);

    localStorage.setItem("hng_new_squeeze_page", JSON.stringify(newSqueeze));
    router.push("/dashboard/preview");
    setLoading(false);
  };

  const unfilledInputs = () => {
    const { title, uri, headline, subHeadline, body } = newSqueeze;
    return !title || !uri || !headline || !subHeadline || !body || !image;
  };

  return (
    <main>
      <header className="mt-4 text-neutral-dark-1">
        <div>
          <h2 className="text-2xl font-bold">New Squeeze Page</h2>
          <p>Create new Squeeze page</p>
        </div>
      </header>

      <section className="mt-8">
        <form className="space-y-2" onSubmit={createSqueeze}>
          <div>
            <div
              className="relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-[#f4f4f4] p-4"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={handleClick}
            >
              {image && (
                <div
                  className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/50"
                  onClick={clearImage}
                >
                  <span className="bg-opacity/70 cursor-pointer rounded-md bg-error p-2">
                    <Trash2 className="text-3xl text-white" />
                  </span>
                </div>
              )}
              {preview ? (
                <Image
                  src={preview}
                  alt="Preview"
                  width={1000}
                  height={1000}
                  className="h-full w-auto"
                />
              ) : (
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-neutral-dark-1 text-neutral-dark-1">
                  <div className="absolute -right-1 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <Plus />
                  </div>
                  <div className="flex flex-col items-center">
                    <Camera />
                    <p className="uppercase">upload</p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={inputReference}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Page Title</Label>
              <Input
                type="text"
                placeholder="e.g John Doe"
                value={newSqueeze.title}
                name="title"
                onChange={handleInput}
              />
            </div>
            <div>
              <Label>URI String</Label>
              <Input
                type="text"
                placeholder="e.g John Doe"
                value={newSqueeze.uri}
                name="uri"
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <Label>Headline Text</Label>
            <Input
              type="text"
              placeholder="e.g John Doe"
              value={newSqueeze.headline}
              name="headline"
              onChange={handleInput}
            />
          </div>
          <div>
            <Label>Sub Headline Text</Label>
            <Input
              type="text"
              placeholder="e.g John Doe"
              value={newSqueeze.subHeadline}
              name="subHeadline"
              onChange={handleInput}
            />
          </div>
          <div>
            <Label>Body Text</Label>
            <Textarea
              placeholder="add product description"
              rows={4}
              value={newSqueeze.body}
              name="body"
              onChange={handleInput}
            />
          </div>

          <div className="mt-2 flex justify-end space-x-4">
            <Button
              onClick={previewPage}
              className="bg-[#F1F5F9] text-neutral-dark-2 hover:text-white"
              disabled={loading || unfilledInputs()}
            >
              Preview Page
            </Button>
            <Button disabled={loading || unfilledInputs()}>Save Page</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
