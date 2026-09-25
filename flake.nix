{
  description = "Imprint Zero authoring tools";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    qmd = {
      url = "github:tobi/qmd/04e4dbd8245c527a88f1a8f0bda547aef9ca81fb";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { nixpkgs, qmd, ... }:
    let
      systems = [ "aarch64-darwin" "x86_64-linux" ];
    in {
      devShells = nixpkgs.lib.genAttrs systems (system: {
        default = nixpkgs.legacyPackages.${system}.mkShell {
          packages = [ qmd.packages.${system}.default ];
        };
      });
    };
}
