import styled from "styled-components";

interface ProductGalleryProps {
  imageUrl: string;
  name: string;
}

const Frame = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

export function ProductGallery({ imageUrl, name }: ProductGalleryProps) {
  return (
    <Frame>
      <Image src={imageUrl} alt={name} />
    </Frame>
  );
}
