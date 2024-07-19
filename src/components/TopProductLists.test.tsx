import TopProductLists from "../components/TopProductLists";
import { render, screen } from "../test/utils";

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    "data-testid": testId,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    "data-testid": string;
  }) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid={testId}
    />
  ),
}));

describe("topProductLists", () => {
  it("renders TopProductLists component with header", () => {
    expect.assertions(2);
    render(<TopProductLists />);
    expect(screen.getByTestId("top-products-title")).toHaveTextContent(
      "Top Products",
    );
    expect(screen.getByTestId("top-products-description")).toHaveTextContent(
      "Your top selling products appear here.",
    );
  });

  it("renders View All button", () => {
    expect.assertions(2);
    render(<TopProductLists />);
    const button = screen.getByTestId("view-all-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("View All");
  });

  it("renders product list items", () => {
    expect.assertions(4);
    render(<TopProductLists />);
    expect(screen.getByText("The Lemonade blender")).toBeInTheDocument();
    expect(screen.getByText("500 sales")).toBeInTheDocument();
    expect(screen.getByText("Bean Cake Powder")).toBeInTheDocument();
    expect(screen.getByText("250 sales")).toBeInTheDocument();
  });

  it("renders product images with correct alt text", () => {
    expect.assertions(2);
    render(<TopProductLists />);
    const lemonadeImage = screen.getByTestId("product-image-1");
    const beanCakeImage = screen.getByTestId("product-image-2");
    expect(lemonadeImage).toHaveAttribute("alt", "The Lemonade blender");
    expect(beanCakeImage).toHaveAttribute("alt", "Bean Cake Powder");
  });
});
