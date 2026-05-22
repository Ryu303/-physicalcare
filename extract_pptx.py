import sys
import zipfile
import xml.etree.ElementTree as ET

def extract(filepath, start, end, outfile):
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            out = []
            for i in range(start, end + 1):
                path = f"ppt/slides/slide{i}.xml"
                try:
                    xml_content = z.read(path)
                    root = ET.fromstring(xml_content)
                    texts = [node.text for node in root.findall('.//a:t', {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}) if node.text]
                    if texts:
                        out.append(f"=== SLIDE {i} ===")
                        out.append(" | ".join(texts))
                except Exception as e:
                    pass
            with open(outfile, 'w', encoding='utf-8') as f:
                f.write("\n".join(out))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract(sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4])
